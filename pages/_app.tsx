import * as React from 'react';

import type { AppProps as DefaultAppProps } from 'next/app';

import { AppWrapper } from '@/src/components';
import { Header, Footer } from '@/src/components/shared';

export default function RootLayout({
  Component
}: {
  Component: DefaultAppProps['Component'];
}) {
  return (
    <AppWrapper>
      <Header />
      <Component />
      <Footer />
    </AppWrapper>
  );
}
