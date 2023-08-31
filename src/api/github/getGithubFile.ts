import { getAccessToken } from './githubAuth';
import { axiosGithub as axios } from './config';

// Response Data type for call to /repos/{author}/{repo}/contents/{path}
type GetGitHubFileData = {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  content: string;
  encoding: BufferEncoding;
};

export const getGithubFile = async (filePath: string) => {
  const accessToken = await getAccessToken();

  const headers = {
    Authorization: `token ${accessToken.token}`,
    Accept: 'application/vnd.github.v3+json'
  };

  return axios.get<GetGitHubFileData>(
    `/repos/SinxRofozoteron/react-resume/contents${filePath}`,
    {
      headers
    }
  );
};
