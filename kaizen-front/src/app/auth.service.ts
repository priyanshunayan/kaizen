import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token;
  httpOptions;
  constructor(private http: HttpClient) { }
  registerUsers(user) {
    return this.http.post(' https://read-book-netlify.herokuapp.com/user/signup', user);
  }
  loginUsers(user) {
    return this.http.post(' https://read-book-netlify.herokuapp.com/user/login', user, this.httpOptions);
  }
  getToken() {
    this.token = JSON.parse(localStorage.getItem('Kaizen'));
    console.log(`the token is ${this.token.token}`);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`,
      })
    };
  }
  isAuthenticated() {
    this.token = JSON.parse(localStorage.getItem('Kaizen'));
    if (this.token.token != null) {
      return true;
    } else {
      return false;
    }
  }
}
