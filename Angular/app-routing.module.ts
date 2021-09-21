import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { GetBooksComponent } from './get-books/get-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-book', pathMatch: 'full' },
  {path: 'get-books', component: GetBooksComponent },
  { path: 'add-book', component:  AddBookComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }