import type { PayloadAction } from '@reduxjs/toolkit';
import type { TourState, TourStep } from '../models';

export const setActiveStepReducer = (
  state: TourState,
  action: PayloadAction<TourStep>
) => {
  state.activeStep = action.payload;
};
