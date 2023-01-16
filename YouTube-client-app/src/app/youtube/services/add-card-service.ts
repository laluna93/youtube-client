import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/app/redux/state.models';

@Injectable({
  providedIn: 'root',
})

export class AddCardService {
  private addcard$$ = new Subject<Item[]>();

  addcard$ = this.addcard$$.asObservable();

  // eslint-disable-next-line class-methods-use-this
  addCard(item: any) {
    const arr: Item[] = [];
    item.forEach((e:any) => {
      if (e.cardKey.action) {
        arr.push(e.cardKey.action.payload);
      }
    });
    this.addcard$$.next(arr);
    console.log(arr, 'arr');
  }
}
