import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../google-books.service';

@Component({
  selector: 'app-book-specific',
  templateUrl: './book-specific.component.html',
  styleUrls: ['./book-specific.component.css']
})
export class BookSpecificComponent implements OnInit {
  bookDetails;
  constructor(private route: ActivatedRoute, private bookService: GoogleBooksService) { }

  ngOnInit() {
    this.getBookDetails();
  }
  getBookDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getSpecificBook(id).subscribe(res => {
      // console.log('Book', res);
      this.bookDetails = (<any>res).volumeInfo;
    });
  }
  toread(event) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    console.log(json.user);
    const user_id = json.user._id;
    this.bookService.toRead(user_id, this.bookDetails).subscribe(res => {
      console.log('Added to To read successfully', res);
    }, (e) => {
      console.log(e);
    });
  }
  read(event) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    console.log(json.user);
    const user_id = json.user._id;
    this.bookService.read(user_id, this.bookDetails).subscribe(res => {
      console.log('Added successfully');
    }, (e) => {
      console.log(e);
    });
  }
  favourite(event) {
    const data = localStorage.getItem('Kaizen');
    const json = JSON.parse(data);
    console.log(json.user);
    const user_id = json.user._id;
    this.bookService.favourite(user_id, this.bookDetails).subscribe(res => {
      console.log('Added successfully');
    }, (e) => {
      console.log(e);
    });
  }
}
