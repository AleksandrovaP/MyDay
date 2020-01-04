import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { LogHoursComponent } from './log-hours/log-hours.component';
import { Employee } from '../model/employee.model';
import { UserRole } from '../model/user.model';
import { ChartsComponent } from './charts/charts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild(LogHoursComponent, {static: false}) addHoursComponent: LogHoursComponent;
  @ViewChild(ChartsComponent, {static: false}) chartsComponent: ChartsComponent;

  public user: Employee;
  public loading: boolean = true;
  private username: string;
  private userRole: UserRole;

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.username && params.role) {
        this.username = params.username;
        this.userRole = params.role;
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

  public onModalClosed(): void {
    this.loading = true;
    this.accountService.getUser(this.username, this.userRole)
      .subscribe((user) => {
        this.user = user;
        this.loading = false;
      });
  }

  public showCharts(): void {
    this.chartsComponent.isOpen = true;
  }
}
