import React, { FC } from 'react';

import Repo from './Repo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilter } from '../../redux/reducers/app';
import styles from '../../../styles/modules/filter.module.scss';

interface FilterItemType {
  label: string;
  value: string;
}

const filters = [
  {
    label: 'Open',
    value: 'open',
  },
  {
    label: 'Closed',
    value: 'closed',
  },
  {
    label: 'PRs',
    value: 'pr',
  },
  {
    label: 'All',
    value: 'all',
  },
];

const FilterItem = ( { filterItem }: { filterItem: FilterItemType } ) => {
  const { label, value } = filterItem;
  const { async, filter } = useAppSelector( ( { app } ) => app );
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch( setFilter( value ) );
  };
  const classList = [
    'FilterItem',
    'page-item',
    filter === value && 'active',
    async && 'disabled',
  ];

  return (
    <li
      className={ classList.filter( ( className ) => !!className ).join( ' ' ) }
      onClick={ onClick }
    >
      <a className="page-link">{ label }</a>
    </li>
  );
};

const Filter: FC = () => (
  <div className={ styles.Filter }>
    <Repo />
    <ul className="pagination">
      { filters.map( ( filter ) => <FilterItem filterItem={ filter } key={ filter.value } /> ) }
    </ul>
  </div>
);

export default Filter;
