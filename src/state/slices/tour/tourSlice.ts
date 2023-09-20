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
  }
});

export const { setActiveTourStep, startTour, stopTour, setOpenTourComplete } =
  tourSlice.actions;
export const tourSliceReducer = tourSlice.reducer;
