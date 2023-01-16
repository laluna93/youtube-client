import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/redux/state.models';
import { Item } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() card!: Item;

  @Input() stateCard: CardInfo | undefined;
}
