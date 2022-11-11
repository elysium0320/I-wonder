import React, { FC } from 'react';

import Bar from './Bar';
import Filter from './Filter';
import Repo from './Repo';
import Logo from '../shared/Logo';
import styles from '../../../styles/modules/header.module.scss';

const Header: FC = () => (
  <header className={ styles.Header }>
    <div className="container">
      <Repo />
      <Logo stacked={ false } />
      <Filter />
    </div>
    <Bar />
  </header>
);

export default Header;
