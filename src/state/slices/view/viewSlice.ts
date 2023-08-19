import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ViewState, ThemeName } from "./models";
import { setThemeReducer } from "./reducers";

const initialViewState: ViewState= { theme: ThemeName.dark };

const viewSlice = createSlice({
  name: "theme",
  initialState: initialViewState,
  reducers: {
    setTheme: setThemeReducer
  },
});

export const { setTheme } = viewSlice.actions;
export const viewSliceReducer =  viewSlice.reducer;