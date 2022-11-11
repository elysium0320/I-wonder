import cx from 'classnames';
import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import styles from '../../../styles/modules/logo.module.scss';

const Logo = ( { stacked }: { stacked: boolean } ) => {
  const { async } = useAppSelector( ( { app } ) => app );

  return (
    <div className={ cx( styles.Logo, { [ styles.stacked ]: stacked } ) } data-testid="Logo">
      <div className="imageContainer">
        <img src={ `/images/spongebob.${ async ? 'webp' : 'png' }` } />
      </div>
      <h1>I Wonder</h1>
    </div>
  );
};

export default Logo;
