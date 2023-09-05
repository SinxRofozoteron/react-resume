import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.origin + '/api/';
  }
  return 'api/';
};

export const backendServiceApi = createApi({
  reducerPath: 'backendService',
  keepUnusedDataFor: 60 * 60,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl()
  }),
  endpoints: () => ({})
});

export const { getRunningQueriesThunk } = backendServiceApi.util;
