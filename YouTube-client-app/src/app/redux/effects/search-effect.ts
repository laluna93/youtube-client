import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';
import { SearchService } from 'src/app/core/services/search-service';
import { VideoItemService } from 'src/app/core/services/video-item-service';
import { Search, searchResultAction } from '../actions/search-action';

@Injectable()
export class SearchEffect {
  searchVideo$ = createEffect(
    // eslint-disable-next-line @ngrx/prefer-effect-callback-in-block-statement
    () => this.action.pipe(
      ofType(Search.searchAction),
      mergeMap(() => this.videoItemService.getVideoYoutube(
        this.searchService.searchVideoSubject.value,
      )
        .pipe(
          map((v) => {
            console.log(v, 'v');
            return searchResultAction({ payload: v.items });
          }),
        )),
    ),
  );

  constructor(
    private action: Actions,
    private videoItemService:VideoItemService,
    private searchService:SearchService,
  ) {}
}
