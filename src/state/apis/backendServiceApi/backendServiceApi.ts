import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import type { RootState } from '../../store';
import type { Action, PayloadAction } from '@reduxjs/toolkit';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.origin + '/api/';
  }
  return 'api/';
};

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const backendServiceApi = createApi({
  reducerPath: 'backendService',
  keepUnusedDataFor: 60 * 60,
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl()
  }),
  endpoints: () => ({})
});
