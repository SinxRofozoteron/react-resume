import axios from "axios";
import { Router } from "express";

import {
  baseURL,
  InstallationTokenData,
  setAccessToken,
} from "../services/githubApi";

// Response Data type for call to /repos/{author}/{repo}/contents/{path}
interface GetGitHubFileData {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  content: string;
  encoding: BufferEncoding;
}

const router = Router();

let accessToken: InstallationTokenData;

router.get("/file/:filePath([^/]*)", async (req, res, next) => {
  try {
    accessToken = await setAccessToken(accessToken);
  } catch (err) {
    return next(err);
  }
  const headers = {
    Authorization: `token ${accessToken.token}`,
    Accept: "application/vnd.github.v3+json",
  };
  const response = await axios.get<GetGitHubFileData>(
    `/repos/SinxRofozoteron/react-resume/contents${req.params["filePath"]}`,
    {
      baseURL,
      headers,
    }
  );
  res
    .status(response.status)
    .send(
      JSON.stringify(
        response.data
          ? Buffer.from(
              response.data.content,
              response.data.encoding
            ).toString()
          : "Something went wrong, could not get file from GitHub..."
      )
    );
});

export default router;
