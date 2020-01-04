import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ChartsComponent } from '../profile/charts/charts.component';
import { WorkingHours } from '../model/working-hours.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  @ViewChild(ChartsComponent, {static: false}) chartsComponent: ChartsComponent;
  public loading: boolean = true;

  public employees: Employee[];
  public employeeData: WorkingHours[];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
      this.loading = false;
    });
  }

  public add(): void {
    // TODO: implement
  }

  public remove(): void {
    // TODO: implement
  }

  public showCharts(employee: Employee): void {
    this.employeeData = employee.workingh;
    this.chartsComponent.isOpen = true;
  }

  public onModalClosed(): void {
    this.loading = true;
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
      this.loading = false;
    });
  }
}
