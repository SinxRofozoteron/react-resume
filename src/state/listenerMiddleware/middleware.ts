// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createListenerMiddleware } from '@reduxjs/toolkit';

import { startTour } from '../slices';
import { tourEffect } from './effects';

import type { RootState } from '../store';

const listenerMiddleware = createListenerMiddleware<RootState>();

listenerMiddleware.startListening({
  actionCreator: startTour,
  effect: tourEffect
});

export { listenerMiddleware };
