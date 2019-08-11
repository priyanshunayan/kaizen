import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(private http: HttpClient) { }
  getBooks(key) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${key}`);
  }
  getSpecificBook(id) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }
  toRead(userId, book) {
    return this.http.post(`http://localhost:3000/toread`, {
      'userId': userId,
      'toread': book
    });
  }
  read(userId, book) {
    return this.http.post(`http://localhost:3000/read`, {
      'userId': userId,
      'read': book
    });
  }
  favourite(userId, book) {
    return this.http.post(`http://localhost:3000/favourite`, {
      'userId': userId,
      'favourite': book
    });
  }
  toreadList(userId) {
    return this.http.get(`http://localhost:3000/toread/${userId}`);
  }
  readList(userId) {
    return this.http.get(`http://localhost:3000/read/${userId}`);
  }
  favouriteList(userId) {
    return this.http.get(`http://localhost:3000/favourite/${userId}`);
  }
  removefromread(userId, title) {
    return this.http.put(`http://localhost:3000/removefromread`, {
      userId: userId,
      title: title
    });
  }
  removefromtoread(userId, title) {
    return this.http.put(`http://localhost:3000/removefromtoread`, {
      userId: userId,
      title: title
    });
  }
  removefromfavourite(userId, title) {
    return this.http.put(`http://localhost:3000/removefromfavourite`, {
      userId: userId,
      title: title
    });
  }
  finished(userId, title) {
    return this.http.put(`http://localhost:3000/finished`, {
      userId: userId,
      title: title
    });
  }
  getUser(username) {
    return this.http.get(`http://localhost:3000/user/users/${username}`);
  }
  fav(userId, title) {
    return this.http.post(`http://localhost:3000/favouritePush`, {
      userId: userId,
      title: title
    });
  }
}
