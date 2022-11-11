import axios from 'axios';

const githubApiUrl = 'https://api.github.com/repos';

export const getIssues = (
  {
    org,
    pointer,
    repo,
  }: {
    org: string;
    pointer: number;
    repo: string;
  },
) => axios.get( `${ githubApiUrl }/${ org }/${ repo }/issues?page=${ pointer }` );
