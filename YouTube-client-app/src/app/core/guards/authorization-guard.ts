import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthorizationGuard implements CanActivate {
  constructor(private rout: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!localStorage.getItem('token')) {
      this.rout.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
