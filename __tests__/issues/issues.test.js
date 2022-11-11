import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useRouter as useRouterMock } from 'next/router';
import React from 'react';

import Issues from '../../pages/[org]/[repo]';
import { cleanup, fireEvent, render, screen, waitFor } from '../../utils/test-utils';

jest.mock( 'next/router', () => (
  {
    ...jest.requireActual( 'next/router' ),
    useRouter: jest.fn(),
  }
) );

const org = 'facebook';
const repo = 'react';
const issues = [
  {
    body: 'https://open.spotify.com/track/7rbECVPkY5UODxoOUVKZnA?si=e2d0947bc4514870',
    html_url: 'https://open.spotify.com/track/7rbECVPkY5UODxoOUVKZnA?si=e2d0947bc4514870',
    labels: [ 'Kanye', 'West', 'Graduation' ],
    pull_request: false,
    state: 'open',
    title: 'I Wonder',
  }
];
export const handlers = [
  rest.get( `https://api.github.com/repos/${ org }/${ repo }/issues`, ( req, res, ctx ) => {
    return res( ctx.json( issues ), ctx.delay( 100 ) )
  } )
];
const server = setupServer( ...handlers );
const routerMock = { isReady: true, query: { org, repo } };

beforeAll( () => server.listen() );

beforeEach( () => {
  useRouterMock.mockImplementation( () => ( routerMock ) );
} );

afterEach( () => {
  cleanup();
  server.resetHandlers();
} );

afterAll( () => server.close() );

describe( 'Issues page', () => {
  it( 'renders progressive states', async () => {
    const { getByTestId } = render( <Issues /> );
    const progressiveList = getByTestId( 'ProgressiveList' );

    expect( progressiveList ).toBeInTheDocument();

    await waitFor( () => {
      expect( screen.getByTestId( 'List' ) ).toBeInTheDocument();
    } );
  } );
} );
