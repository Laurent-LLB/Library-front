import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css',
})
export class BooksPageComponent {
  books$: Observable<Book[]> = this.booksService.getAll();

  constructor(private booksService: BooksService) {}
}
