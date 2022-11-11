import Head from 'next/head';
import React, { FC } from 'react';

import Logo from '../src/components/shared/Logo';
import Search from '../src/components/index/Search';
import Tagline from '../src/components/index/Tagline';

const Index: FC = () => (
  <div className="Index">
    <Head>
      <title>I Wonder</title>
      <meta content="I Wonder" key="title" property="og:title" />
    </Head>
    <div className="indexContainer">
      <Logo stacked={ true } />
      <Tagline />
      <Search />
    </div>
  </div>
);

export default Index;
