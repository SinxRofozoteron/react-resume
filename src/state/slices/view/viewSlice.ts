import { createSlice } from '@reduxjs/toolkit';

import { ThemeName } from './models';
import {
  setThemeReducer,
  setScreenWidthReducer,
  setActiveCodeEditorFileReducer
} from './reducers';

import type { ViewState } from './models';

export const initialViewState: ViewState = {
  theme: ThemeName.DARK,
  activeCodeEditorFile: null
};

const viewSlice = createSlice({
  name: 'theme',
  initialState: initialViewState,
  reducers: {
    setTheme: setThemeReducer,
    setScreenWidth: setScreenWidthReducer,
    setActiveCodeEditorFile: setActiveCodeEditorFileReducer
  }
});

export const { setTheme, setScreenWidth, setActiveCodeEditorFile } = viewSlice.actions;
export const viewSliceReducer = viewSlice.reducer;
