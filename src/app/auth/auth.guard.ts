import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  NavigationExtras,
  CanLoad,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url) {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;

    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: 1234343 },
      fragment: 'anchor'
    };

    this.router.navigate(['/login'], navigationExtras);

    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
}
