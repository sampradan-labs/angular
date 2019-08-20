import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
  selector: 'app-async-promise',
  templateUrl: './async-promise.component.html',
  styleUrls: ['./async-promise.component.css']
})
export class AsyncPromiseComponent implements OnInit {
  promiseBooks: Promise<Book[]>
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
 this.promiseBooks = this.bookService.getBooksWithPromise();
  }

}
