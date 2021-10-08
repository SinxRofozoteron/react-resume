import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../features/auth/auth-api";
import authReducer from "../features/auth/auth-slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
