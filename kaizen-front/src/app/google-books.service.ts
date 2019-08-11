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
    return this.http.post(` https://read-book-netlify.herokuapp.com/toread`, {
      'userId': userId,
      'toread': book
    });
  }
  read(userId, book) {
    return this.http.post(` https://read-book-netlify.herokuapp.com/read`, {
      'userId': userId,
      'read': book
    });
  }
  favourite(userId, book) {
    return this.http.post(` https://read-book-netlify.herokuapp.com/favourite`, {
      'userId': userId,
      'favourite': book
    });
  }
  toreadList(userId) {
    return this.http.get(` https://read-book-netlify.herokuapp.com/toread/${userId}`);
  }
  readList(userId) {
    return this.http.get(` https://read-book-netlify.herokuapp.com/read/${userId}`);
  }
  favouriteList(userId) {
    return this.http.get(` https://read-book-netlify.herokuapp.com/favourite/${userId}`);
  }
  removefromread(userId, title) {
    return this.http.put(` https://read-book-netlify.herokuapp.com/removefromread`, {
      userId: userId,
      title: title
    });
  }
  removefromtoread(userId, title) {
    return this.http.put(` https://read-book-netlify.herokuapp.com/removefromtoread`, {
      userId: userId,
      title: title
    });
  }
  removefromfavourite(userId, title) {
    return this.http.put(` https://read-book-netlify.herokuapp.com/removefromfavourite`, {
      userId: userId,
      title: title
    });
  }
  finished(userId, title) {
    return this.http.put(` https://read-book-netlify.herokuapp.com/finished`, {
      userId: userId,
      title: title
    });
  }
  getUser(username) {
    return this.http.get(` https://read-book-netlify.herokuapp.com/user/users/${username}`);
  }
  fav(userId, title) {
    return this.http.post(` https://read-book-netlify.herokuapp.com/favouritePush`, {
      userId: userId,
      title: title
    });
  }
  userData(username) {
    return this.http.get(` https://read-book-netlify.herokuapp.com/user/${username}`);
  }
}
