import type { PayloadAction } from '@reduxjs/toolkit';
import type { TourState } from '../models';

export const startTourReducer = {
  prepare: (tourId: string) => {
    return {
      payload: tourId
    };
  },
  reducer: (state: TourState, action: PayloadAction<string>) => {
    state.tourId = action.payload;
  }
};

export const stopTourReducer = (state: TourState) => {
  delete state.activeStep;
  state.tourId = null;
};
