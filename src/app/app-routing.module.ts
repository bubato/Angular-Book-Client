import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookShopComponent } from './book-shop/book-shop.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/login' },
  { path: 'login',  component: LoginComponent },
  { path: 'book-shop',  component: BookShopComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    LoginComponent
  ];
}

