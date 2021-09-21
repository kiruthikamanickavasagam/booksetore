import { Component } from '@angular/core';
import { books } from '../books';
import { Book } from  '../book';
import { BookService } from '../book.service';
import { Status } from '../status';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  providers:[BookService],
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {
  model = new Book('','','','');
  status = new Status('','');
  constructor(private bookService: BookService) { }

  onSubmit(){
    console.log(this.model);
    this.addbook(this.model);
  }

   addbook(book:Book){
     this.bookService.addBook(book)
     .subscribe(status => (this.status = status));
   }

}