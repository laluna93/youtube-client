import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cardKey, CardsState } from '../state.models';

const cardFeatureSelector = createFeatureSelector<CardsState>(cardKey);

export const cardSelector = createSelector(
  cardFeatureSelector,
  (state) => state[cardKey],
);
