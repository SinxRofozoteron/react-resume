import { setActiveTourStep, stopTour, setOpenFileExplorer } from '../../slices';
import { tourStepCompleted } from '../actions';

import type { TourStep } from '../../slices/tour/models';
import type { startTour } from '../../slices';
import type { RootState, AppDispatch } from '../../store';
import type { ListenerEffect } from '@reduxjs/toolkit';

import { SUPPORTED_TOURS } from '@/src/tour';

// Regex matches any string which starts with file- or folder-
const fileExplorerComponent = /^((file|folder)-)/;

export const tourEffect: ListenerEffect<
  ReturnType<typeof startTour>,
  RootState,
  AppDispatch
> = async (action, listenerApi) => {
  const tourId = action.payload;

  if (!SUPPORTED_TOURS.includes(tourId)) {
    console.error(`Unsupported tourId: ${tourId}`);
    listenerApi.dispatch(stopTour());
    return;
  }
  const steps: TourStep[] = (await import(`../../../tour/${tourId}`)).default;

  const tour = listenerApi.fork(async () => {
    let previousStep: null | TourStep = null;

    for (const step of steps) {
      // Open FileExplorer if next step is to open a file
      if (
        fileExplorerComponent.test(step.componentId) &&
        (!previousStep || !fileExplorerComponent.test(previousStep.componentId))
      ) {
        listenerApi.dispatch(setOpenFileExplorer(true));
        // Wait for FileExplorer transition, because tooltip
        // position is calculated based on the final file/folder position
        await listenerApi.delay(500);
      }
      listenerApi.dispatch(setActiveTourStep(step));

      await listenerApi.condition(action => tourStepCompleted.match(action));

      previousStep = step;
    }
  });

  const cancelTour = listenerApi.fork(async () => {
    return await listenerApi.condition(action => stopTour.match(action));
  });

  const result = await Promise.race([tour.result, cancelTour.result]);

  // If result.value === true it means tour was canceled
  if (result.status === 'ok' && result.value === true) {
    tour.cancel();
  } else {
    listenerApi.dispatch(stopTour());
    cancelTour.cancel();
  }
};
