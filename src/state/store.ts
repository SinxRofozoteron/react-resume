import {
  configureStore as configureRTKStore,
  type PreloadedState,
  type StateFromReducersMapObject
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { backendServiceApi } from './apis';
import { viewSliceReducer, tourSliceReducer } from './slices';
import { listenerMiddleware } from './listenerMiddleware';

export const reducersMap = {
  [backendServiceApi.reducerPath]: backendServiceApi.reducer,
  view: viewSliceReducer,
  tour: tourSliceReducer
};

export type RootState = StateFromReducersMapObject<typeof reducersMap>;

export const configureStore = (preloadedState?: PreloadedState<RootState>) => {
  const rootStore = configureRTKStore({
    devTools: {
      name: 'resume-app'
    },
    preloadedState,
    reducer: reducersMap,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(backendServiceApi.middleware)
        .prepend(listenerMiddleware.middleware)
  });

  return rootStore;
};

const makeStore = () => configureStore();

export type RootStore = ReturnType<typeof configureStore>;

export type AppDispatch = RootStore['dispatch'];

export const wrapper = createWrapper(makeStore);
