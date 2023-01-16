import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FlagSortsService {
  flagSort: Observable<boolean> | undefined;

  flagSortSubject = new Subject<boolean>();

  constructor() {
    this.flagSort = this.flagSortSubject.asObservable();
  }

  flagSortMethod(data:boolean) {
    this.flagSortSubject.next(data);
  }
}
