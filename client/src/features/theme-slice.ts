import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ThemeName {
  "dark",
  "light",
}

interface ThemeState {
  theme: ThemeName.dark | ThemeName.light;
}

const initialState: ThemeState = { theme: ThemeName.light };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
