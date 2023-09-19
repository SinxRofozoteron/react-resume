import { createSlice } from '@reduxjs/toolkit';

import { setActiveStepReducer, startTourReducer, stopTourReducer } from './reducers';

import type { TourState } from './models';

export const initialTourState: TourState = {
  tourId: null
};

const tourSlice = createSlice({
  name: 'tour',
  initialState: initialTourState,
  reducers: {
    startTour: startTourReducer,
    setActiveTourStep: setActiveStepReducer,
    stopTour: stopTourReducer
  }
});

export const { setActiveTourStep, startTour, stopTour } = tourSlice.actions;
export const tourSliceReducer = tourSlice.reducer;
