'use client';

import { Provider } from 'react-redux';
import * as React from 'react';

import { StyleManager } from './StyleManager';

import type { RootStore } from '../state';

type AppWrapperProps = {
  children: React.ReactNode;
  store: RootStore;
};

export const AppWrapper = ({ children, store }: AppWrapperProps) => {
  return (
    <Provider store={store}>
      <StyleManager>{children}</StyleManager>
    </Provider>
  );
};
