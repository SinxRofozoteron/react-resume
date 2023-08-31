'use client';

import { Provider } from 'react-redux';
import * as React from 'react';

import { StyleManager } from './StyleManager';
import { wrapper } from '../state/store';

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const { store } = wrapper.useWrappedStore({});
  return (
    <Provider store={store}>
      <StyleManager>{children}</StyleManager>
    </Provider>
  );
};
