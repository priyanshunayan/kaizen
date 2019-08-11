import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from '../auth-guard.service';
import { BookSpecificComponent } from './book-specific/book-specific.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  path: 'books',
  component: BooksComponent,
  canActivate: [AuthGuard]
},
{
  path: 'book/:id',
  component: BookSpecificComponent,
  canActivate: [AuthGuard]
},
{
  path: ':username',
  component: UserProfileComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
