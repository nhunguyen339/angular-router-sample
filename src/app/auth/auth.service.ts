import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  constructor() { }

  public login() {
    return of(true).pipe(
      delay(3000),
      tap(val => this.isLoggedIn = val)
    );
  }

  public logout() {
    this.isLoggedIn = false;
  }
}
