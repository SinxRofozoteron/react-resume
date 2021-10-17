import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../features/auth/auth-api";
import { githubApi } from "../features/github/github-api";
import authReducer from "../features/auth/auth-slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [githubApi.reducerPath]: githubApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(githubApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
