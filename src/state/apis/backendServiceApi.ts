import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendServiceApi = createApi({
  reducerPath: 'backendService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/'
  }),
  endpoints(builder) {
    return {
      fetchFile: builder.query<string, string>({
        query: filePath => `github/file/${filePath}`
      })
    };
  }
});

export const { useFetchFileQuery } = backendServiceApi;
