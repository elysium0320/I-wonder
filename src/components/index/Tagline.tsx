import React from 'react';

import styles from '../../../styles/modules/tagline.module.scss';

const Tagline = () => (
  <div className={ `Tagline ${ styles.Tagline }` } data-testid="Tagline">
    <p>Do you even remember what the issue is</p>
    <p>You just trying to find where the tissue is</p>
    <p className="fst-italic">I Wonder, Kanye West</p>
  </div>
);

export default Tagline;
