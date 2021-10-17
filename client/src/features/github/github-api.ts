import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { githubApiEndpoints as endpoints } from "../../config/api-endpoints";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/github/file",
  }),
  endpoints(builder) {
    return {
      fetchSkillReactPage: builder.query<string, void>({
        query: () => endpoints.getSkillReactPage,
      }),
    };
  },
});

export const { useFetchSkillReactPageQuery } = githubApi;
