import { Action, createReducer, on } from '@ngrx/store';
import { AddCardAction } from '../actions/card-action';
import { cardKey, CardsState, initCardState } from '../state.models';

const cardReduser = createReducer(
  initCardState,
  on(
    AddCardAction,
    (state: CardsState, { payload }) => ({
      ...state,
      [cardKey]: [...state[cardKey], payload],
    }),
  ),
);

export function AddCardReduser(state:CardsState | undefined, action: Action) {
  return cardReduser(state, action);
}
