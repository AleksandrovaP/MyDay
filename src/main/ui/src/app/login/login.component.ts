import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  user: User = new User();
  errorMessage: string;
  constructor (private authService: AuthenticationService, private router: Router) { }

  login(){
    this.authService.logIn(this.user).subscribe((data: any) => {
          this.router.navigate(['/profile']);
          },
      (err: Error) => {
          this.errorMessage = err.message;
        }
      )
  }
}
