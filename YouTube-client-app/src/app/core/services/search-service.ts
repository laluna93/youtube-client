import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  // public searchVideo: Observable<string>;

  public searchVideoSubject = new BehaviorSubject<string>('');

  public searchVideo = this.searchVideoSubject.asObservable();

  searchVideoMethod(data: any) {
    this.searchVideoSubject.next(data);
  }
}
