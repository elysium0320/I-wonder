import '@testing-library/jest-dom';
import React, { useState as useStateMock } from 'react';

import Search, { urls, validate } from '../../src/components/index/Search';
import { act, cleanup, fireEvent, render, screen, waitFor } from '../../utils/test-utils';

jest.mock( 'react', () => (
  {
    ...jest.requireActual( 'react' ),
    useState: jest.fn(),
  }
) );

const setState = jest.fn();

beforeEach( () => {
  useStateMock.mockImplementation( state => [ state, setState ] );
} );

afterEach( () => {
  cleanup();
} );

describe( 'Search', () => {
  it( 'renders input component', () => {
    const { getByTestId } = render( <Search /> );
    const input = getByTestId( 'input' );

    expect( input ).toBeInTheDocument();
  } );

  it( 'updates value on input', () => {
    useStateMock.mockImplementationOnce( state => [ state, setState ] );
    const { getByTestId } = render( <Search /> );
    const input = getByTestId( 'input' );
    const nflSmartContractsRepoUrl = 'https://github.com/dapperlabs/nfl-smart-contracts';

    fireEvent.change( input, { target: { value: nflSmartContractsRepoUrl } } );
    expect( setState ).toHaveBeenCalledWith( nflSmartContractsRepoUrl );
  } );

  it( 'validate fn validates proper Github URLs', () => {
    urls.forEach( ( url ) => expect( !!validate( url ) ).toBeTruthy() );
  } );

  it( 'validate fn returns false on invalid URLs', () => {
    const invalidUrls = [
      '',
      'meow',
      'https://github.com/dapperlabs',
      'https://www.dapperlabs.com/',
    ];

    invalidUrls.forEach( ( url ) => expect( validate( url ) ).toBeFalsy() );
  } );
} );
