import { createSlice } from '@reduxjs/toolkit';

import {
  setActiveStepReducer,
  startTourReducer,
  stopTourReducer,
  setOpenTourCompleteReducer
} from './reducers';

import type { TourState } from './models';

export const initialTourState: TourState = {
  tourId: null,
  openTourCompleteModal: false
};

const tourSlice = createSlice({
  name: 'tour',
  initialState: initialTourState,
  reducers: {
    startTour: startTourReducer,
    setActiveTourStep: setActiveStepReducer,
    stopTour: stopTourReducer,
    setOpenTourComplete: setOpenTourCompleteReducer
  },
  selectors: {
    selectOpenTourCompleteModal: state => state.openTourCompleteModal,
    selectCurrentTourStep: (state, componentId: string) => {
      const activeStep = state.activeStep;
      return activeStep?.componentId === componentId ? activeStep : null;
    }
  }
});

export const { setActiveTourStep, startTour, stopTour, setOpenTourComplete } =
  tourSlice.actions;
export const tourSliceReducer = tourSlice.reducer;
export const { selectCurrentTourStep, selectOpenTourCompleteModal } =
  tourSlice.selectors;
