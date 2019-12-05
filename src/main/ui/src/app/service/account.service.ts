import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { constants } from '../util/constants';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  createAccount(user: User) {
    return this.http.post(constants.PATHS.REGISTER, user).pipe(
      map((response: HttpResponse<any>) => response.body));
  }
}
