import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BooksComponent } from './books/books.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BookSpecificComponent } from './book-specific/book-specific.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [BooksComponent, BookSpecificComponent]
})
export class UserModule { }
