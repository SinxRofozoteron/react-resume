import { backendServiceApi } from '../backendServiceApi';

type FetchFileConfig = {
  repo: string;
  filePath: string;
};

export const { useFetchFileQuery } = backendServiceApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchFile: builder.query<string, FetchFileConfig>({
        query: ({ repo, filePath }) => `github/${repo}/file/${filePath}`
      })
    };
  }
});
