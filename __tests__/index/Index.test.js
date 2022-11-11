import '@testing-library/jest-dom';
import { useRouter as useRouterMock } from 'next/router';

import Index from '../../pages/index';
import { cleanup, fireEvent, render, screen } from '../../utils/test-utils';

jest.mock( 'next/router', () => (
  {
    ...jest.requireActual( 'next/router' ),
    useRouter: jest.fn(),
  }
) );

const push = jest.fn();

beforeEach( () => {
  useRouterMock.mockImplementation( () => ( { push } ) );
} );

afterEach( () => {
  cleanup();
  push.mockClear();
} );

describe( 'Index page', () => {
  it( 'renders all components', () => {
    render( <Index /> );
    const logo = screen.getByTestId( 'Logo' );
    const tagline = screen.getByTestId( 'Tagline' );
    const search = screen.getByTestId( 'Search' );

    expect( logo ).toBeInTheDocument();
    expect( tagline ).toBeInTheDocument();
    expect( search ).toBeInTheDocument();
  } );

  it( 'calls router.push on valid URL', () => {
    const { getByTestId } = render( <Index /> );
    const input = getByTestId( 'input' );
    const submit = getByTestId( 'submit' );
    const nflSmartContractsRepoUrl = 'https://github.com/dapperlabs/nfl-smart-contracts';

    fireEvent.change( input, { target: { value: nflSmartContractsRepoUrl } } );
    fireEvent.click( submit );
    expect( push ).toHaveBeenCalledTimes( 1 );
  } );

  it( 'shows error message on invalid URL', () => {
    const { getByTestId } = render( <Index /> );
    const input = getByTestId( 'input' );
    const submit = getByTestId( 'submit' );
    const label = getByTestId( 'label' );
    const invalidUrl = 'meow';

    fireEvent.change( input, { target: { value: invalidUrl } } );
    fireEvent.click( submit );
    expect( push ).toHaveBeenCalledTimes( 0 );
    expect( label ).toHaveTextContent( 'Please enter a valid Github URL' );
  } );

  it( 'calls router.push on click of "Feeling lucky" button', () => {
    const { getByTestId } = render( <Index /> );
    const lucky = getByTestId( 'lucky' );

    fireEvent.click( lucky );
    expect( push ).toHaveBeenCalledTimes( 1 );
  } );
} );
