import React, { FC } from 'react';

import styles from '../../../styles/modules/list.module.scss';

const ProgressiveListItem = () => (
  <li className="col-md-4">
    <div>
      <h3 />
      <p />
      <ul>
        { [ ...Array( 2 ) ].map( ( _, i ) => <li key={ i } /> ) }
      </ul>
    </div>
  </li>
);

const ProgressiveList: FC = () => (
  <div className={ `ProgressiveList ${ styles.ProgressiveList }` } data-testid="ProgressiveList">
    <div className="container">
      <ul className="row">
        { [ ...Array( 6 ) ].map( ( _, i ) => <ProgressiveListItem key={ i } /> ) }
      </ul>
    </div>
  </div>
);

export default ProgressiveList;
