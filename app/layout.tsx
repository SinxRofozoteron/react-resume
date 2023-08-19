import './globals.css';
import * as React from 'react';

import type { Metadata } from 'next';

import { AppWrapper } from '@/src/components';

export const metadata: Metadata = {
  title: 'Resume App',
  description: 'Resume of Aliaksandr Burakou'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
