import { Action, createReducer, on } from '@ngrx/store';
import { searchResultAction } from '../actions/search-action';
import {
  initSearchState, searchKey, SearchState,
} from '../state.models';

const searchReduser = createReducer(
  initSearchState,
  on(
    searchResultAction,
    (state, { payload }) => ({
      ...state,
      [searchKey]: payload,
    }),
  ),
);

export function SearchReduser(state: SearchState | undefined, action: Action) {
  return searchReduser(state, action);
}
