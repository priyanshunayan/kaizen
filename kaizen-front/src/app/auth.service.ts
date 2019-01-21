import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';\
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  const token;
  constructor(private http: HttpClient) { }
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token.token}`,
    })
  };
  registerUsers(user) {
    return this.http.post('http://localhost:3000/user/signup', user);
  }
  loginUsers(user) {
    return this.http.post('http://localhost:3000/user/login', user, this.httpOptions);
  }
  getToken() {
    this.token = JSON.parse(localStorage.getItem('Kaizen'));
    console.log(`the token is ${this.token.token}`);
  }
}
