import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-book-details-page',
  standalone: true,
  imports: [],
  templateUrl: './book-details-page.component.html',
  styleUrl: './book-details-page.component.css',
})
export class BookDetailsPageComponent {
  book: Book | undefined;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.booksService.get(id).subscribe((book) => (this.book = book));
  }
}
