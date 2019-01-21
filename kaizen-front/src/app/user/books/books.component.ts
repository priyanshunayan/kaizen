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
  i;
  constructor(private bookService: GoogleBooksService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const searchBox = document.getElementById('search-box');
    console.log('SearchBox', searchBox);
    const typeahead = fromEvent(searchBox, 'input').pipe(
    map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
    filter(text => text.length > 2),
   debounceTime(1000),
   distinctUntilChanged(),
);
  typeahead.subscribe(data => {
 // Handle the data from the API
 this.bookService.getBooks(data).subscribe(res => {
   this.i = 0;
   if ((<any>res).items) {
    (<any>res).items.forEach(element => {
      this.booksArray[this.i] = element.volumeInfo;
      this.i++;
    });
   }
   console.log(`res is ${res.toString()}`);
   console.log(this.booksArray);
 });
  console.log(data);
});
  }

}
