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
      console.log("Book", res);
      this.bookDetails = (<any>res).volumeInfo;
    });
  }

}
