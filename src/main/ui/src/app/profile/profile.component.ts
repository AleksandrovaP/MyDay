import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user.model';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.username && params.role) {
        this.accountService.getUser(params.username, params.role)
          .subscribe((user) => this.user = user);
      }
    });
  }

  public add(): void {

  }
}
