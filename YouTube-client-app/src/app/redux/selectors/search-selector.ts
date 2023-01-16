import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchKey, SearchState } from '../state.models';

const searchFeatureSelector = createFeatureSelector<SearchState>(searchKey);

export const searchSelector = createSelector(
  searchFeatureSelector,
  (state) => state[searchKey],
);
