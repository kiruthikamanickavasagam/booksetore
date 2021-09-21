import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from  './book';
import { Status } from './status';



@Injectable()
export class BookService {
   constructor(private http:HttpClient) { }
   private baseurl="http://localhost:8080/";
   private getbooks_url= this.baseurl +"getBooks";
   private addbook_url= this.baseurl +"addBook";

  // handleError(servicename,result)
  // {}
    
   getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getbooks_url)
     // .pipe(
      //  catchError(this.handleError('getHeroes', []))
      //);
  }

  addBook(book: Book): Observable<Status> {
    return this.http.post<Status>(this.addbook_url, book)
      
  }

  
}