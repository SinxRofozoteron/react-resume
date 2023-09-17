import type { PayloadAction } from '@reduxjs/toolkit';
import type { ViewState } from '../models';

export const setOpenFileExplorerReducer = (
  state: ViewState,
  action: PayloadAction<boolean>
) => {
  state.openFileExplorer = action.payload;
};
