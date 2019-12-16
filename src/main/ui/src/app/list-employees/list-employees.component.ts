import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }

  public add(): void {
    // TODO: implement
  }

  public remove(): void {
    // TODO: implement
  }
}
