import { Component } from '@angular/core';
import { SimpleBook } from '../../interfaces/simple-book';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-book-edit-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit-page.component.html',
  styleUrl: './book-edit-page.component.css',
})
export class BookEditPageComponent {
  book: Book = {
    id: 0,
    titre: '',
    nombreDePage: 0,
    domaineId:0,
    auteurId:0,
    auteur: {
      id:0,
      nom:'',
      prenom:'',
      email:'',
      telephone: '',
      grade: '',
      livres: []
    },
    domaine: {
      id: 0,
      nom: '',
      description: '',
      livres: [],
    },
    emprunts:[]
  };
  err: number = 0;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.booksService.get(id).subscribe((book) => (this.book = book));
  }

  onSubmit() {
    this.booksService.put(this.book.id, this.book).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`authors/${this.book.id}`]);
      },
      error: (err: any) => {
        this.err = 1;
      },
    });
  }
}
