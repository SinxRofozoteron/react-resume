import { createSlice } from '@reduxjs/toolkit';

import { ThemeName } from './models';
import { setThemeReducer, setScreenWidthReducer } from './reducers';

import type { ViewState } from './models';

const initialViewState: ViewState = { theme: ThemeName.dark };

const viewSlice = createSlice({
  name: 'theme',
  initialState: initialViewState,
  reducers: {
    setTheme: setThemeReducer,
    setScreenWidth: setScreenWidthReducer
  }
});

export const { setTheme, setScreenWidth } = viewSlice.actions;
export const viewSliceReducer = viewSlice.reducer;
