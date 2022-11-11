import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getIssues as getIssuesReq } from '../../services/github-api';

type IssueState = 'open' | 'closed';

export interface Issue {
  body: string;
  labels: any[],
  pull_request: string;
  state: IssueState;
  title: string;
  url: string;
}

interface App {
  async: boolean;
  filter: string;
  issues: Issue[] | null;
  org: string | null;
  pointer: number;
  repo: string | null;
}

export const getIssues = createAsyncThunk<any, void, { state: any }>(
  'getIssues',
  async ( _, { getState } ) => {
    const { app } = getState();
    const {
      org,
      pointer,
      repo,
    } = app;
    const response = await getIssuesReq( { org, pointer, repo } );

    return response.data;
  },
);

const initialState: App = {
  async: false,
  filter: 'all',
  issues: null,
  org: null,
  pointer: 1,
  repo: null,
};

export const appSlice = createSlice( {
  extraReducers: {
    'getIssues/pending': ( state ) => {
      state.async = true;
    },
    'getIssues/fulfilled': ( state, { payload } ) => {
      state.async = false;
      if ( !payload ) return;
      const issues = payload.map( ( {
        body,
        html_url,
        labels,
        pull_request,
        state: issueState,
        title,
      } ) => ( {
        body,
        labels,
        pull_request,
        state: issueState,
        title,
        url: html_url,
      } ) );
      state.issues = state.issues ? [
        ...state.issues,
        ...issues,
      ] : issues;
      state.pointer += 1;
    },
    'getIssues/rejected': ( state ) => {
      console.log( 'getIssues.rejected' );
      state.async = false;
    },
  },
  initialState,
  name: 'app',
  reducers: {
    resetState: ( state ) => {
      state.async = false;
      state.filter = 'all';
      state.issues = null;
      state.org = null;
      state.repo = null;
      state.pointer = 1;
    },
    setFilter: ( state, action: PayloadAction<App[ 'filter' ]> ) => {
      const { payload } = action;

      state.filter = payload;
    },
    setOrg: ( state, action: PayloadAction<App[ 'org' ]> ) => {
      const { payload } = action;

      state.org = payload;
    },
    setRepo: ( state, action: PayloadAction<App[ 'repo' ]> ) => {
      const { payload } = action;

      state.repo = payload;
    },
  },
} );

export const {
  resetState,
  setFilter,
  setOrg,
  setRepo,
} = appSlice.actions;

export default appSlice.reducer;
