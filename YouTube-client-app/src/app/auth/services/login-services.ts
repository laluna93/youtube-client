import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginServices {
  private loginSubject = new BehaviorSubject<string | null>(localStorage.getItem('login'));

  login = this.loginSubject.asObservable();

  saveLogin(data:string) {
    localStorage.setItem('login', data);
    this.loginSubject.next(data);
  }
}
