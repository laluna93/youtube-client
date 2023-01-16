import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import environment from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AddCardReduser } from './reducers/card-reducer';
import { cardKey, searchKey } from './state.models';
import { SearchEffect } from './effects/search-effect';
import { SearchReduser } from './reducers/search-reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        [cardKey]: AddCardReduser,
        [searchKey]: SearchReduser,
      },
      {},
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SearchEffect]),

  ],
})
export class ReduxModule { }
