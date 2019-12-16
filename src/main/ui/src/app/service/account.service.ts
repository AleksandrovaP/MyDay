import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User, UserRole } from '../model/user.model';
import { constants } from '../util/constants';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee.model';

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  public createAccount(user: User) {
    return this.http.post(constants.PATHS.REGISTER, user).pipe(
      map((response: HttpResponse<any>) => response.body));
  }

  public getUser(username: string, role: UserRole) {
    if (role === UserRole.EMPLOYEE) {
      return this.http.get(constants.PATHS.EMPLOYEE + '/' + username).pipe(
        map((response: Employee) => response));
    }
  }
}
