import { createAction, props } from '@ngrx/store';
import { Item } from '../state.models';

export enum Search {
  searchAction = '[searchCards] search cards',
  searchResultCards = '[searchResultCards] search result cards',
}

export const searchAction = createAction(
  Search.searchAction,
  props <{ payload: { title: string } }>(),
);

export const searchResultAction = createAction(
  Search.searchResultCards,
  props <{ payload: Item[] }>(),
);
