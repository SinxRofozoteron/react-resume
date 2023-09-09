import type { ValueOf } from 'next/dist/shared/lib/constants';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ViewState, ThemeName } from '../models';

export const setThemeReducer = (
  state: ViewState,
  action: PayloadAction<ValueOf<typeof ThemeName>>
) => {
  state.theme = action.payload;
};
