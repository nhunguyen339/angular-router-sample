import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;

  constructor(public authService: AuthService, private router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  public login() {
    this.message = 'Trying to loggin...';
    this.authService.login().subscribe(isLoggedIn => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/admin';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  public logout() {
    this.setMessage();
    this.authService.logout();
  }
}
