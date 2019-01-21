import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
