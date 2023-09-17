import { createSlice } from '@reduxjs/toolkit';

import { ThemeName } from './models';
import {
  setThemeReducer,
  setScreenWidthReducer,
  setActiveCodeEditorFileReducer,
  setOpenFileExplorerReducer
} from './reducers';

import type { ViewState } from './models';

export const initialViewState: ViewState = {
  theme: ThemeName.DARK,
  activeCodeEditorFile: null,
  openFileExplorer: false
};

const viewSlice = createSlice({
  name: 'theme',
  initialState: initialViewState,
  reducers: {
    setTheme: setThemeReducer,
    setScreenWidth: setScreenWidthReducer,
    setActiveCodeEditorFile: setActiveCodeEditorFileReducer,
    setOpenFileExplorer: setOpenFileExplorerReducer
  }
});

export const {
  setTheme,
  setScreenWidth,
  setActiveCodeEditorFile,
  setOpenFileExplorer
} = viewSlice.actions;
export const viewSliceReducer = viewSlice.reducer;
