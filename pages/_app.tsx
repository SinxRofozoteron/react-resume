import * as React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { AppProps as DefaultAppProps } from 'next/app';

import { AppWrapper } from '@/src/components';
import { Header, Footer } from '@/src/components/shared';
import { wrapper } from '@/src/state';

export default function RootLayout({
  Component,
  ...rest
}: {
  Component: DefaultAppProps['Component'];
}) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <AppWrapper store={store}>
        <Header />
        <Component {...props.pageProps} />
        <Footer />
      </AppWrapper>
      <SpeedInsights />
    </>
  );
}
