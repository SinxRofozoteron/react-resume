import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type FetchFileConfig = {
  repo: string;
  filePath: string;
};

export const backendServiceApi = createApi({
  reducerPath: 'backendService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/'
  }),
  endpoints(builder) {
    return {
      fetchFile: builder.query<string, FetchFileConfig>({
        query: ({ repo, filePath }) => `github/${repo}/file/${filePath}`
      })
    };
  }
});

export const { useFetchFileQuery } = backendServiceApi;
