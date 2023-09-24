import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  authenticateUser(data) {
    return this.http.post('http://localhost:3000/auth/v1/', data);
  }

  setBearerToken(token) {
   return localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
   return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
   return this.http.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
     headers: new HttpHeaders().set('Authorization' , `Bearer ${token}`)
   }).map((res: any) => {
     return res.isAuthenticated;
   }).toPromise();
  }
}
