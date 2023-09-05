import { AppWrapper } from '../components';
import { configureStore } from '../state';

import type { ReactNode } from 'react';

type TestWrapperProps = {
  children: ReactNode;
};

export const TestWrapper = ({ children }: TestWrapperProps) => {
  const testStore = configureStore();

  return <AppWrapper store={testStore}>{children}</AppWrapper>;
};
