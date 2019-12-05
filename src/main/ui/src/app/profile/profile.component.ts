import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  currentUser: User;

  constructor(public authService: AuthenticationService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

// login out from the app
  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
        });
  }
}
