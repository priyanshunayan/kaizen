import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from '../auth-guard.service';
import { BookSpecificComponent } from './book-specific/book-specific.component';

const routes: Routes = [{
  path: 'books',
  component: BooksComponent,
  canActivate: [AuthGuard]
},
{
  path: 'book/:id',
  component: BookSpecificComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
