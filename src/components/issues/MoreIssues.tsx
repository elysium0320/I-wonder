import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getIssues } from '../../redux/reducers/app';
import styles from '../../../styles/modules/more.module.scss';

const Issues: FC = () => {
  const { async, issues } = useAppSelector( ( { app } ) => app );
  const dispatch = useAppDispatch();
  // Github API returns 30 issues per call.
  // If the length of the issues array is divisible by 30, more issues are available.
  // Edge case: The number of issues is divisible by exactly 30.
  const show = issues && issues.length && !( issues.length % 30 );
  const onClick = () => {
    if ( async ) return;
    dispatch( getIssues() );
  };

  return show ? (
    <div className={ `MoreIssues ${ styles.MoreIssues }` }>
      <button
        className="btn btn-primary"
        disabled={ async }
        onClick={ onClick }
      >
        Show more issues
      </button>
    </div>
  ) : ( <></> );
};

export default Issues;
