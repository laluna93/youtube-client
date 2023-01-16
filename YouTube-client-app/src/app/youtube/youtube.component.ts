import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { FlagSortsService } from '../core/services/flag-sort-service';
import { SearchService } from '../core/services/search-service';
import { SortsService } from '../core/services/sorts-services';
import { searchAction } from '../redux/actions/search-action';
import { cardSelector } from '../redux/selectors/card-select';
import { searchSelector } from '../redux/selectors/search-selector';
import { CardInfo } from '../redux/state.models';
import { Item } from './components/search/search-item.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  resultSearch: Item[] = [];

  textSearch: string = '';

  inputFilter: string = '';

  flagSort: boolean = true;

  stateCards: CardInfo[] = [];

  constructor(
    public inputSearchs: SearchService,
    public inputSort: SortsService,
    public flagSortService: FlagSortsService,
    private store: Store,
  ) {

  }

  ngOnInit() {
    this.inputSearchs.searchVideo.pipe(
      tap((e) => {
        this.textSearch = e;
      }),
      filter((e) => e.length > 0),
    ).subscribe((res: any) => {
      this.store.dispatch(searchAction({ payload: { title: res } }));
    });

    this.inputSort.sortVideo.subscribe((data:string) => {
      this.inputFilter = data;
    });
    this.flagSortService.flagSort?.subscribe((data:boolean) => {
      this.flagSort = data;
    });

    this.store.select(searchSelector).subscribe((card) => {
      this.resultSearch = card;
    });

    this.store.select(cardSelector).subscribe((cards) => {
      cards.forEach((card) => {
        this.stateCards.push(card);
      });
    });
  }
}
