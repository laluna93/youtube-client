import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class VideoLocalService {
  private videoLocal$$ = new Subject<string[]>();

  videoLocal$ = this.videoLocal$$.asObservable();

  getVideoLocal(item: any) {
    const arr: any[] = [];
    item.forEach((e:any) => {
      if (e.cardKey.action) {
        arr.push(e.cardKey.action.payload);
      }
    });
    console.log(arr, 'serv');

    this.videoLocal$$.next(arr);
  }
}
