import type { PayloadAction } from '@reduxjs/toolkit';
import type { ViewState } from '../models';

export const setActiveCodeEditorFileReducer = (
  state: ViewState,
  action: PayloadAction<string | null>
) => {
  state.activeCodeEditorFile = action.payload;
};
