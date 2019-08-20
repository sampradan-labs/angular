import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import {Promise} from 'q';

import { Book } from './book';
@Injectable()
export class BookService {
  
  url = "http://localhost:4200/assets/data/books.json";
    constructor(private http:Http) { }
    //Returns Observable<Book[]>
    getBooksWithObservable(): Observable<Book[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }
    //Returns Promise<Book[]>
    getBooksWithPromise(): Promise<Book[]> {
        return this.http.get(this.url).toPromise()
                        .then((res: Response) => res.json())
                        .catch(err => {throw "An http error occurred";})
    }






    //Returns Observable<string>
    getCurrentTime(): Observable<string> {
	return new Observable<string>((observer: Subscriber<string>) => {
	    //1 second interval
	    setInterval(() => observer.next(new Date().toString()), 1000);
	  });
    }
    //Returns Promise<Book> 
    getBookSlowly(): Promise<Book> {
        return new Promise(resolve => {
	    let book = new Book();
	    book.id= 100;
	    book.name= 'jQuery Tutorials';
            // Delay by 3 second
            setTimeout(() => resolve(book), 3000);
          });
    }

}
