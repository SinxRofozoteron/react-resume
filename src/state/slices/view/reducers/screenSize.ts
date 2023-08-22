import type { PayloadAction } from '@reduxjs/toolkit';
import type { ViewState } from '../models';

export const setScreenWidthReducer = (
  state: ViewState,
  action: PayloadAction<number>
) => {
  state.screenWidth = action.payload;
};
