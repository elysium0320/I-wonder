import { render } from '../utils/test-utils';

import Index from '../pages/index';

it( 'renders index unchanged', () => {
  const { container } = render( <Index /> );

  expect( container ).toMatchSnapshot();
} );
