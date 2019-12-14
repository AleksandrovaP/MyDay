import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constants } from '../util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public user: User = new User();

  public errorMessage: string;
  public loginForm: FormGroup;

  constructor (private authService: AuthenticationService,
               private formBuilder: FormBuilder,
               private router: Router) {

    this.loginForm = this.formBuilder.group({
      role: [constants.ROLES.EMPLOYEE, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.errorMessage = '';
    this.user = { ...this.loginForm.value };

    this.authService.logIn(this.user).subscribe((data: any) => {
        this.router.navigate(['/profile']);
      },(err: Error) => {
          this.errorMessage = err.message;
        }
      )
  }
}
