import { backendServiceApi } from '../backendServiceApi';

type FetchFileConfig = {
  repo: string;
  filePath: string;
};

type FetchFileResponse = {
  content: string;
  name: string;
};

export const { useLazyFetchFileQuery } = backendServiceApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchFile: builder.query<FetchFileResponse, FetchFileConfig>({
        query: ({ repo, filePath }) => `github/${repo}/file/${filePath}`
      })
    };
  }
});
