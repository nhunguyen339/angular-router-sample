import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }
  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return false;
  }
}
