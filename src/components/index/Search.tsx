import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  FormEvent,
  FC,
  useState,
} from 'react';

import styles from '../../../styles/modules/search.module.scss';

export const urls = [
  'https://github.com/dapperlabs/nfl-smart-contracts',
  'https://github.com/dapperlabs/nba-smart-contracts',
  'https://github.com/onflow/flow-go',
  'https://github.com/facebook/react',
  'https://github.com/reduxjs/redux',
];

export const validate = ( value: string ) => {
  try {
    const url = new URL( value );
    const { hostname, pathname } = url;
    const [ _, org, repo ] = pathname.split( '/' );

    return hostname === 'github.com' && org && repo
      ? { org, repo }
      : false;
  } catch ( error ) {
    return false;
  }
};

const Search: FC = () => {
  const [ value, setValue ] = useState<string>( '' );
  const [ invalid, setInvalid ] = useState<boolean>( false );
  const [ placeholder, setPlaceholder ] = useState<string>( 'Github URL' );
  const router = useRouter();
  const onChange = ( event: ChangeEvent<HTMLInputElement> ) => setValue( event.target.value );
  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const url = validate( value );
    if ( !url ) {
      setInvalid( true );
      setPlaceholder( 'Please enter a valid Github URL' );

      return;
    }
    const { org, repo } = url;

    router.push( `/${ org }/${ repo }` );
  };
  const onClickLucky = () => {
    const url = validate( urls[ Math.floor( Math.random() * urls.length ) ] );
    if ( !url ) return;
    const { org, repo } = url;

    router.push( `/${ org }/${ repo }` );
  };

  return (
    <form className={ `Search ${ styles.Search }` } data-testid="Search" onSubmit={ onSubmit }>
      <div className="form-floating">
        <input
          className={ `form-control ${ invalid ? 'is-invalid' : '' }` }
          data-testid="input"
          id="githubUrl"
          onChange={ onChange }
          placeholder={ placeholder }
          type="text"
        />
        <label data-testid="label" htmlFor="githubUrl">{ placeholder }</label>
        { !invalid && <img src="/icons/search.svg" /> }
      </div>
      <div className="buttonContainer">
        <button
          className="btn btn-primary"
          data-testid="submit"
          type="submit"
        >
          View issues
        </button>
        <button
          className="btn btn-outline-primary"
          data-testid="lucky"
          onClick={ onClickLucky }
          type="button"
        >
          Feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
