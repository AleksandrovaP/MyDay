import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { constants } from '../util/constants';
import { map, tap } from 'rxjs/operators';
import { Base64 } from 'js-base64';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public logIn(user: User) {

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    let base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);

    return this.http.post(constants.PATHS.LOGIN, user, {
      headers: headers
    }).pipe(tap((response: HttpResponse<User>) => {
        // login successful if there's a jwt token in the response
        let user = response.body;// the returned user object is a principal object
        if (user) {
          // store user details  in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }));
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(constants.PATHS.LOGOUT,{})
      .pipe( tap((response: HttpResponse<any>) => {
        localStorage.removeItem('currentUser');
      }));
  }
}
