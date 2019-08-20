import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-conditional-pipes',
  templateUrl: './conditional-pipes.component.html',
  styleUrls: ['./conditional-pipes.component.css']
})
export class ConditionalPipesComponent implements OnInit {
  promiseBook: Promise<Book>
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
 this.promiseBook = this.bookService.getBookSlowly();
  }

}
