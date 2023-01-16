import {
  Component, ElementRef, EventEmitter, Input, Output, ViewChild,
} from '@angular/core';
import { SearchService } from '../../services/search-service';
import { SortsService } from '../../services/sorts-services';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrls: ['./sorts.component.scss'],
})
export default class SortsComponent {
  @Input() flagFilter!: boolean | null;

  textSearch: string = '';

  @Output() resultSearch: EventEmitter<string> = new EventEmitter<string>();

  @Output() sortingDirection: EventEmitter<boolean> = new EventEmitter<boolean>();

  flagClickSort = false;

  textFillter: string = '';

  textSort = '';

  @Input() flag:any;

  @ViewChild('textInputSort')
    textInput!: ElementRef<HTMLInputElement>;

  constructor(
    public inputSort:SortsService,
    public inputSearch: SearchService,

  ) {

  }

  sortDate(text: string = '') {
    if (this.inputSearch.searchVideo) {
      this.textSort = text
      || this.textFillter
        .toLocaleLowerCase()
        .split(' ')
        .join('');
    } else {
      this.textSort = '';
    }
    if (this.textSearch) {
      this.textFillter = '';
    }

    this.flagClickSort = !this.flagClickSort;
    this.sortingDirection.emit(this.flagClickSort);
    this.resultSearch.emit(this.textSort);
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges() {
    if (this.textInput) {
      this.textFillter = '';
      this.textInput.nativeElement.value = '';
    }
    if (this.flag === true) {
      this.textFillter = '';
      this.textInput.nativeElement.value = '';
    }
  }

  ngOnInit() {
    // eslint-disable-next-line no-return-assign
    this.inputSearch.searchVideo.subscribe((e:any) => this.textSearch = e);
  }
}
