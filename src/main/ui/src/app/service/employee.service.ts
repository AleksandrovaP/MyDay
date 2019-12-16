import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { WorkingHours } from '../model/working-hours.model';
import { constants } from '../util/constants';

@Injectable()
export class EmployeeService {

  private employeesUrl: string;

  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/employees';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeesUrl, employee);
  }

  public logHours(workingHours: WorkingHours) {
    return this.http.post(constants.PATHS.LOG_HOURS, workingHours);
  }
}
