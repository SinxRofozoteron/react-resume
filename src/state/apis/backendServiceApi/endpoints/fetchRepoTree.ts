import { backendServiceApi } from '../backendServiceApi';

import type { FolderStructure } from '@/src/components/CodeSkillPage/FileExplorer';

export const apiWithFetchTree = backendServiceApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchRepoTree: builder.query<FolderStructure, string>({
        query: repo => `github/${repo}`
      })
    };
  }
});

export const { useFetchRepoTreeQuery } = apiWithFetchTree;
export const { fetchRepoTree } = apiWithFetchTree.endpoints;
