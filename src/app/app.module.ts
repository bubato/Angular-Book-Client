import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { BookShopComponent } from './book-shop/book-shop.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, LoadingComponent, BookShopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }