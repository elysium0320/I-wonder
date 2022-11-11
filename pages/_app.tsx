import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../src/redux/store';

import '../styles/main.scss';

const App = (
  { Component, pageProps }: AppProps,
): ReactNode => (
  <ReduxProvider store={ store }>
    <Component { ...pageProps } />
  </ReduxProvider>
);

export default App;
