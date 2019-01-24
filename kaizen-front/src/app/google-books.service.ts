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
}

