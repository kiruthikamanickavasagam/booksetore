import { Component, OnInit } from '@angular/core';
import { Book } from  '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  providers: [BookService],
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent  {
  
  constructor(private bookService: BookService) { }

  books: Book[] = [];
  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => (this.books = books));
  }


}





