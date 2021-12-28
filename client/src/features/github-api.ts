import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/github/file",
  }),
  endpoints(builder) {
    return {
      fetchFile: builder.query<string, string>({
        query: (filePath) => filePath,
      }),
    };
  },
});

export const { useFetchFileQuery } = githubApi;
