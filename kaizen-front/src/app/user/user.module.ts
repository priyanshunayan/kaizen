import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BooksComponent } from './books/books.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [BooksComponent]
})
export class UserModule { }
