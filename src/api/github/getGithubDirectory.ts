import set from 'lodash/set';
import get from 'lodash/get';

import { getAccessToken } from './githubAuth';
import { axiosGithub as axios } from './config';

import type { FolderStructure } from '@/src/components/CodeSkillPage/FileExplorer';

type TreeObject = {
  path: string;
  type: 'blob' | 'tree';
  mode: string;
  sha: string;
  size: number;
  url: string;
};

// Response Data type for call to
// /repos/SinxRofozoteron/{repo}/git/trees/master?recursive=true
type GetGitHubDirectoryData = {
  sha: string;
  url: string;
  tree: TreeObject[];
};

export const getGithubDirectory = async (repo: string): Promise<FolderStructure> => {
  const accessToken = await getAccessToken();

  const headers = {
    Authorization: `token ${accessToken.token}`,
    Accept: 'application/vnd.github.v3+json'
  };

  const response = await axios.get<GetGitHubDirectoryData>(
    `/repos/SinxRofozoteron/${repo}/git/trees/master?recursive=true`,
    {
      headers
    }
  );

  const treeObjectArr = response.data.tree;

  const output: FolderStructure = { files: [] };

  for (const treeObject of treeObjectArr) {
    if (treeObject.type === 'tree') {
      continue;
    }
    const path = treeObject.path.split('/');
    const fileName = path.pop()!;
    path.push('files');

    const currentList: string[] | undefined = get(output, path);

    if (currentList) {
      currentList.push(fileName);
    } else {
      set(output, path, [fileName]);
    }
  }

  return output;
};
