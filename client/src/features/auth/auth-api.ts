import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import apiEndpoints from "../../config/api-endpoints";

export interface DbUser {
  _id: string;
  googleId: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<DbUser, void>({
        query: () => apiEndpoints.getCurrentUser,
      }),
    };
  },
});

export const { useFetchUserQuery } = authApi;
