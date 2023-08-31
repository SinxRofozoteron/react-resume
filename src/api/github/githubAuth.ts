import jwt from 'jsonwebtoken';
import axios from 'axios';
import fs from 'fs';

import { axiosGithub } from './config';

import type { AxiosResponse } from 'axios';

const githubPrivateKey = fs.readFileSync(
  'resume-app.2023-08-31.private-key.pem',
  'utf-8'
);

type InstallationData = {
  id: string;
  access_tokens_url: string;
  app_slug: string;
};

export type InstallationTokenData = {
  token: string;
  expires_at: string;
  permissions: object;
  repository_selection: string;
};

// Sign JWT
function createJWT(): string {
  const currentDate = Math.round(Date.now() / 1000); // in seconds
  const payload = {
    iat: currentDate,
    exp: currentDate + 60 * 5, // exp in 5 min
    iss: process.env.GITHUB_KEY_ISSUER
  };
  return jwt.sign(payload, githubPrivateKey, {
    algorithm: 'RS256'
  });
}

// Get installation access token
async function getInstallAccessToken() {
  // Headers common for all calls inside this method
  const headers = {
    Authorization: `Bearer ${createJWT()}`,
    Accept: 'application/vnd.github.v3+json'
  };
  // Get all installations of this app on GitHub
  let installationsRes: AxiosResponse<InstallationData[], any> | null = null;
  let isError: boolean = false;
  let attempts: number = 0;
  // Try to get a response for at least 10 times before throwing an error
  while (!installationsRes || isError || attempts >= 10) {
    try {
      installationsRes = await axiosGithub.get<InstallationData[]>(
        '/app/installations',
        {
          headers
        }
      );
      isError = false;
    } catch (err) {
      attempts++;
      if (attempts >= 10) {
        throw err;
      }
      isError = true;
      console.log(`Attempt to get GitHub instllations failed. Trying one more time..`);
    }
  }

  // Generate access token for the app
  const { data: tokenInfo } = await axios.post<InstallationTokenData>(
    installationsRes.data[0].access_tokens_url,
    null,
    { headers }
  );
  return tokenInfo;
}

let accessToken: InstallationTokenData;

// Function which returns a new token if previous is expired
// If not expired returns copy of existing token
export const getAccessToken = async (): Promise<InstallationTokenData> => {
  if (!accessToken) {
    console.log('No GitHub Access Token found, obtaining a new one...');
    accessToken = await getInstallAccessToken();
    return accessToken;
  } else {
    const tokenExp = new Date(accessToken.expires_at);
    // if token is expired or about to expire fetch a new one
    if (tokenExp < new Date(Date.now() - (10 * 60) / 1000)) {
      console.log('GitHub access token is about to expire, obtaining a new one...');
      accessToken = await getInstallAccessToken();
      return accessToken;
    } else {
      console.log('reusing existing GitHub access token...');
      return accessToken;
    }
  }
};
