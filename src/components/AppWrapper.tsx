'use client';

import { Provider } from 'react-redux';
import * as React from 'react';

import { configureStore } from '../state/store';
import { StyleManager } from './StyleManager';

const store = configureStore();

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <Provider store={store}>
      <StyleManager>{children}</StyleManager>
    </Provider>
  );
};
