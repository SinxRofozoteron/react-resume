import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DbUser } from "./auth-api";

interface AuthState {
  user: DbUser | null;
  token?: string | null;
}

const initialState: AuthState = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
