import { Component, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleAuthor } from '../../interfaces/simple-author';

@Component({
  selector: 'app-author-edit-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './author-edit-page.component.html',
  styleUrl: './author-edit-page.component.css',
})
export class AuthorEditPageComponent {
  author: SimpleAuthor = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    grade: '',
  };

  err: number = 0;

  constructor(
    private authorsService: AuthorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorsService
      .getSimple(id)
      .subscribe((author) => (this.author = author));
  }

  onSubmit() {
    const author: SimpleAuthor = {
      id: this.author.id,
      nom: this.author.nom,
      prenom: this.author.prenom,
      email: this.author.email,
      telephone: this.author.telephone,
      grade: this.author.grade,
    };
    this.authorsService.put(author.id, author).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`authors/${author.id}`]);
      },
      error: (err: any) => {
        this.err = 1;
      },
    });
  }
}
