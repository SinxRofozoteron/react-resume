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

router.get("/github/file/:filePath([^/]*)", async (req, res) => {
  accessToken = await setAccessToken(accessToken);
  const headers = {
    Authorization: `token ${accessToken.token}`,
    Accept: "application/vnd.github.v3+json",
  };
  const { data } = await axios.get<GetGitHubFileData>(
    `/repos/SinxRofozoteron/react-resume/contents${req.params["filePath"]}`,
    {
      baseURL,
      headers,
    }
  );
  res.send(Buffer.from(data.content, data.encoding).toString());
});

export default router;
