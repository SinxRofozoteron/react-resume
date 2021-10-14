import jwt from "jsonwebtoken";
import axios from "axios";

import keys from "../config/keys";

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
    exp: currentDate + 60 * 10, // exp in 10min
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
  const { data: installs } = await axios.get<InstallationData[]>(
    "/app/installations",
    {
      baseURL,
      headers,
    }
  );
  // Generate access token for the app
  const { data: tokenInfo } = await axios.post<InstallationTokenData>(
    installs[0].access_tokens_url,
    null,
    { headers }
  );
  return tokenInfo;
}

// Function which returns a new token if previous is expired
// If not expired returns copy of existing token
export const setAccessToken = async (
  token: InstallationTokenData
): Promise<InstallationTokenData> => {
  if (!token) {
    return await getInstallAccessToken();
  } else {
    const tokenExp = new Date(token.expires_at);
    // if token is expired or about to expire fetch a new one
    if (tokenExp < new Date(Date.now() + 1000 * 60)) {
      return await getInstallAccessToken();
    } else {
      return { ...token };
    }
  }
};
