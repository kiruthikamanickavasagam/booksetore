import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AddBookComponent } from './add-book/add-book.component';
import { GetBooksComponent } from './get-books/get-books.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'get-books', component: GetBooksComponent },
      { path: 'add-book', component:  AddBookComponent },
      { path: '', component:  AddBookComponent }
      
    ])
  ],
  declarations: [
    AppComponent,
    AddBookComponent,
    GetBooksComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/