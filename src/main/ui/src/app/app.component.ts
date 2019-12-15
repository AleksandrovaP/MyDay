import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthenticationService,
              private router: Router) {}

  public isLoginOrRegisterPage(): boolean {
    return this.router.isActive('login', false) || this.router.isActive('register', false);
  }

  // log out from the app
  public logout() {
    this.authService.logOut()
      .subscribe(
        (data: any) => {
          this.router.navigate(['/login']);
        },(error: Error) => {
          console.error(error)
        });
  }

  public getProfileLink() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role && user.username) {
      return '/profile/' + user.role + '/' + user.username;
    }
    return '';
  }
}
