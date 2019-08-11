import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../google-books.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private bookService: GoogleBooksService, private route: ActivatedRoute) { }
  read = [];
  favourites = [];
  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    const username = this.route.snapshot.params['username'];
    console.log(username);
    this.bookService.userData(username).subscribe(res => {
      console.log(res);
      this.read = (<any>res).read;
      this.favourites = (<any>res).favourites;
    });
  }
  addToReadingList(event, title) {
    let data;
    this.favourites.forEach(book => {
      if (book.title === title) {
        data = book;
      }
    });
    const data1 = localStorage.getItem('Kaizen');
    const json = JSON.parse(data1);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.toRead(user_id, data).subscribe((res) => {
      console.log('Added', res);
    });
  }
  addToReadingListFinished(event, title) {
    let data;
    this.read.forEach(book => {
      if (book.title === title) {
        data = book;
      }
    });
    const data1 = localStorage.getItem('Kaizen');
    const json = JSON.parse(data1);
    // console.log(json.user);
    const user_id = json.user._id;
    this.bookService.toRead(user_id, data).subscribe((res) => {
      console.log('Added', res);
    });
  }
}
