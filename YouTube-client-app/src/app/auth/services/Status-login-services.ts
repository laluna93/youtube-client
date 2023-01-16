import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StatusLoginServices {
  private isLoginSubject = new BehaviorSubject<boolean>(!!(localStorage.getItem('login')));

  isLogin = this.isLoginSubject.asObservable();

  checkAuth(data:boolean) {
    this.isLoginSubject.next(data);
  }
}
