import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import app from '../src/redux/reducers/app';

function render(
  ui,
  {
    preloadedState,
    store = configureStore( { reducer: { app }, preloadedState } ),
    ...renderOptions
  } = {}
) {
  function Wrapper( { children } ) {
    return <Provider store={ store }>{ children }</Provider>
  }

  return rtlRender( ui, { wrapper: Wrapper, ...renderOptions } )
};

export * from '@testing-library/react';

export { render };
