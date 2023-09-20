import type { PayloadAction } from '@reduxjs/toolkit';
import type { TourState } from '../models';

export const setOpenTourCompleteReducer = {
  prepare: (open: boolean) => {
    return {
      payload: open
    };
  },
  reducer: (state: TourState, action: PayloadAction<boolean>) => {
    state.openTourCompleteModal = action.payload;
  }
};
