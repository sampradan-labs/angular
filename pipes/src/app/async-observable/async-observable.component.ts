import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.css']
})
export class AsyncObservableComponent implements OnInit {

  observableBooks: Observable<Book[]>
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
        this.observableBooks = this.bookService.getBooksWithObservable();
   }

}
