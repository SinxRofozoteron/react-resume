import jwt from "jsonwebtoken";
import axios, { AxiosResponse, AxiosError } from "axios";

import keys from "../config/keys";
import { HttpException } from "../middleware/errorHandler";

interface InstallationData {
  id: string;
  access_tokens_url: string;
  app_slug: string;
}

export interface InstallationTokenData {
  token: string;
  expires_at: string;
  permissions: object;
  repository_selection: string;
}

// Endpoints
export const baseURL = "https://api.github.com";

// Sign JWT
function createJWT(): string {
  const currentDate = Math.round(Date.now() / 1000); // in seconds
  const payload = {
    iat: currentDate,
    exp: currentDate + 60 * 5, // exp in 5 min
    iss: keys.gitHubKeyIssuer,
  };
  return jwt.sign(payload, keys.githubPrivateKey, {
    algorithm: "RS256",
  });
}

// Get installation access token
async function getInstallAccessToken() {
  // Headers common for all calls inside this method
  const headers = {
    Authorization: `Bearer ${createJWT()}`,
    Accept: "application/vnd.github.v3+json",
  };
  // Get all installations of this app on GitHub
  let installationsRes: AxiosResponse<InstallationData[], any> | null = null;

  try {
    let isError: boolean = false;
    let attempts: number = 0;
    // Try to get a response for at least 10 times before throwing an error
    while (!installationsRes || isError || attempts >= 10) {
      try {
        installationsRes = await axios.get<InstallationData[]>(
          "/app/installations",
          {
            baseURL,
            headers,
          }
        );
        isError = false;
      } catch (err) {
        attempts++;
        if (attempts >= 10) {
          throw err;
        }
        isError = true;
        console.log(
          `Attempt to get GitHub instllations failed. Trying one more time..`
        );
      }
    }

    // Generate access token for the app
    const { data: tokenInfo } = await axios.post<InstallationTokenData>(
      installationsRes.data[0].access_tokens_url,
      null,
      { headers }
    );
    return tokenInfo;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new HttpException(Number(err.code), err.message);
    } else {
      throw err;
    }
  }
}

// Function which returns a new token if previous is expired
// If not expired returns copy of existing token
export const setAccessToken = async (
  token: InstallationTokenData
): Promise<InstallationTokenData> => {
  if (!token) {
    console.log("No GitHub Access Token found, obtaining a new one...");
    return await getInstallAccessToken();
  } else {
    const tokenExp = new Date(token.expires_at);
    // if token is expired or about to expire fetch a new one
    if (tokenExp < new Date(Date.now() - (10 * 60) / 1000)) {
      console.log(
        "GitHub access token is about to expire, obtaining a new one..."
      );
      return await getInstallAccessToken();
    } else {
      console.log("reusing existing GitHub access token...");
      return { ...token };
    }
  }
};
