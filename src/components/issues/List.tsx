import React, { FC } from 'react';

import ProgressiveList from './ProgressiveList';
import { useAppSelector } from '../../redux/hooks';
import { Issue } from '../../redux/reducers/app';
import styles from '../../../styles/modules/list.module.scss';

const parseText = ( text: string, length: number ) => ( text.length > length
  ? `${ text.slice( 0, length ) } ...`
  : text
);

const ListItem = ( { issue }: { issue: Issue } ) => {
  const {
    body,
    labels,
    pull_request,
    state,
    title,
    url,
  } = issue;
  const { filter } = useAppSelector( ( { app } ) => app );
  const show = filter === 'all' || ( filter === 'pr' && pull_request ) || filter === state;

  return (
    <li className="col-md-4 ListItem" style={ { display: [ 'none', 'block' ][ +show ] } }>
      <a href={ url } target="_blank">
        <div className="listItemContainer">
          <h3>{ parseText( title, 50 ) }</h3>
          <p>{ body ? parseText( body, 200 ) : <span>No description provided.</span> }</p>
          {
            !!labels.length && <ul className="labels">
              { labels.map( ( { color, name }, i ) => (
                  <li key={ i } style={ { backgroundColor: color ? `#${ color }` : '#000' } }>{ name }</li>
              ) ) }
            </ul>
          }
        </div>
      </a>
      { pull_request && <img className="icon" src="/icons/pull-request.svg" /> }
    </li>
  );
};

const List: FC = () => {
  const { issues } = useAppSelector( ( { app } ) => app );

  if ( !issues ) return ( <ProgressiveList /> );
  return issues.length ? (
    <div className={ `List ${ styles.List }` } data-testid="List">
      <div className="container">
        <ul className="row">
          { issues.map( ( issue ) => <ListItem issue={ issue } key={ issue.title } /> ) }
        </ul>
      </div>
    </div>
  ) : ( <div className="NoIssues">No issues to display.</div> );
};

export default List;
