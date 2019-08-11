import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GoogleBooksService } from '../../google-books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements AfterViewInit, OnInit {
  booksArray = [];
  toRead = [];
  read = [];
  favourites = [];
  users = [];

  i;
  constructor(private bookService: GoogleBooksService) { }

  ngOnInit() {
    this.getToReadList();
    this.getFavouritesList();
    this.getReadList();
  }
  ngAfterViewInit() {
    const searchBox = document.getElementById('search-box');
    console.log('SearchBox', searchBox);
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
    );
    typeahead.subscribe(data => {
      // Handle the data from the API
      this.bookService.getBooks(data).subscribe(res => {
        this.i = 0;
        if ((<any>res).items) {
          (<any>res).items.forEach(element => {
            this.booksArray[this.i] = element;
            this.i++;
          });
        }
        // console.log(`res is ${res.toString()}`);
        // console.log(this.booksArray);
      });
      // console.log(data);
    });
  }

  getToReadList() {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.toreadList(user_id).subscribe(res => {
      // console.log('Books', res);
      this.toRead = (<any>res).data;
    });
  }
  getReadList() {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.readList(user_id).subscribe(res => {
      // console.log('Books', res);
      this.read = (<any>res).data;
    });
  }
  getFavouritesList() {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.favouriteList(user_id).subscribe(res => {
      console.log('Books', res);
      this.favourites = (<any>res).data;
    });
  }
  removefromread(event, title) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.removefromread(user_id, title).subscribe(res => {
      this.read = (<any>res).data.read;
    });
  }
  removefromtoread(event, title) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.removefromtoread(user_id, title).subscribe(res => {
      // console.log("IN TO READ", res);
      this.toRead = (<any>res).data.toread;
    });
  }
  removefromfavourite(event, title) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.removefromfavourite(user_id, title).subscribe(res => {
      this.favourites = (<any>res).data.favourite;
      this.ngOnInit();
    });
  }
  finished(event, title) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.finished(user_id, title).subscribe(res => {
      console.log('DONE', res);
      this.ngOnInit();
    });
  }
  isFavourite(event, title) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.fav(user_id, title).subscribe(res => {
      console.log('SUCCESS');
      this.ngOnInit();
    });

  }
}
