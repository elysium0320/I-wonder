import React, { FC } from 'react';

import { useAppSelector } from '../../redux/hooks';
import styles from '../../../styles/modules/bar.module.scss';

const Bar: FC = () => {
  const { async } = useAppSelector( ( { app } ) => app );

  return (
    <div className={ `Bar ${ styles.Bar }` }>
      <div className={ async ? 'async' : 'solid' } />
    </div>
  );
};

export default Bar;
