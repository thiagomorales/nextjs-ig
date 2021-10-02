import React from 'react';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { StoreProvider } from '../providers/StoryProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <StoreProvider {...pageProps}>
        <Component {...pageProps} />
      </StoreProvider>
    </RecoilRoot>
  );
}

export default MyApp;
