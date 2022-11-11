import React, { FC } from 'react';

import { useAppSelector } from '../../redux/hooks';

const Repo: FC = () => {
  const { org, repo } = useAppSelector( ( { app } ) => app );

  return (
    <h2>
      <span>{ org }</span>
      <span className="arrow">{ '>' }</span>
      <span>{ repo }</span>
    </h2>
  );
};

export default Repo;
