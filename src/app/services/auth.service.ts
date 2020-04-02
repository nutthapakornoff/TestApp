import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserBo } from '../models/UserBo';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

// baseUrl = 'http://localhost:5001/api/auth/';
Userbo: UserBo;
decodetoken: any;
helper = new JwtHelperService();
redirecturl: string;

constructor(private http: HttpClient,
            private commonservice: CommonService) { }


login(userbo: UserBo) {
  console.log('test');
  this.commonservice.ServiceURI = 'http://localhost:5002/api/';
  return this.http.post(this.commonservice.ServiceURI + 'auth/' + 'login', userbo)
    .pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodetoken = this.helper.decodeToken(user.token);
          console.log( this.decodetoken);
          this.commonservice.UserLogin = this.decodetoken.unique_name;
        }
      })
    );

}
loggedin() {
  const token = localStorage.getItem('token');
  console.log(!this.helper.isTokenExpired(token));
  return !this.helper.isTokenExpired(token);
}
}
