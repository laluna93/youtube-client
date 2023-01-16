import { createAction, props } from '@ngrx/store';
import { CardInfo } from '../state.models';

export enum Card {
  card = '[card] add Card',
}
export const AddCardAction = createAction(Card.card, props<{ payload: CardInfo }>());
