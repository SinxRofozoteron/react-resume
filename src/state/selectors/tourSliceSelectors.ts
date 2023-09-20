import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export const selectOpenTourCompleteModal = (state: RootState) =>
  state.tour.openTourCompleteModal;

export const selectActiveTourStep = (state: RootState) => state.tour.activeStep;

/**
 * Selector creator. Selector returns active step if it corresponds
 * to the provided componentId. If not, returns null
 * @param componentId component to return the active step for
 * @returns active tour step or null
 */
export const selectCurrentTourStep = (componentId: string) =>
  createSelector(selectActiveTourStep, activeStep => {
    if (activeStep?.componentId === componentId) {
      return activeStep;
    }

    return null;
  });
