import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';

import Header from '../../../src/components/issues/Header';
import List from '../../../src/components/issues/List';
import MoreIssues from '../../../src/components/issues/MoreIssues';
import { useAppDispatch, useAppSelector } from '../../../src/redux/hooks';
import {
  getIssues,
  resetState,
  setOrg,
  setRepo,
} from '../../../src/redux/reducers/app';

const Issues: FC = () => {
  const { org, repo } = useAppSelector( ( { app } ) => app );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isReady, query } = router;
  const { org: queryOrg, repo: queryRepo } = query;

  useEffect( () => {
    if ( !isReady ) return;
    if ( queryOrg && queryRepo ) {
      dispatch( setOrg( queryOrg as string ) );
      dispatch( setRepo( queryRepo as string ) );
    } else {
      router.push( '/' );
    }
  }, [ queryOrg, queryRepo ] );

  useEffect( () => {
    if ( !org || !repo ) return;

    dispatch( getIssues() );
  }, [ org, repo ] );

  // @ts-ignore
  useEffect( () => () => { dispatch( resetState() ); }, [] );

  return (
    <div className="Issues">
      <Head>
        <title>I Wonder | Issues</title>
        <meta content="I Wonder | Issues" key="title" property="og:title" />
      </Head>
      <Header />
      <List />
      <MoreIssues />
      <footer>I Wonder</footer>
    </div>
  );
};

export default Issues;
