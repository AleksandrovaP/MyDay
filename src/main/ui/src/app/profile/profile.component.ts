import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { LogHoursComponent } from './log-hours/log-hours.component';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild(LogHoursComponent, {static: false}) addHoursComponent: LogHoursComponent;

  public user: Employee;
  public loading: boolean = true;

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.username && params.role) {
        this.accountService.getUser(params.username, params.role)
          .subscribe((user) => {
            this.user = user;
            this.loading = false;
          });
      }
    });
  }

  public add(): void {
    this.addHoursComponent.isOpen = true;
  }
}
