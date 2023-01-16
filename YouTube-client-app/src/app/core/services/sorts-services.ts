import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SortsService {
  sortVideo!: Observable<string>;

  sortVideoSubject = new Subject<string>();

  constructor() {
    this.sortVideo = this.sortVideoSubject.asObservable();
  }

  sortVideoMethod(data:string) {
    this.sortVideoSubject.next(data);
  }
}
