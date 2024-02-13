import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Observable } from 'rxjs';
import { Author } from '../../interfaces/author';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authors-page',
  standalone: true,
  imports: [AsyncPipe, NgForOf, RouterLink],
  templateUrl: './authors-page.component.html',
  styleUrl: './authors-page.component.css',
})
export class AuthorsPageComponent {
  authors$: Observable<Author[]> = this.authorsService.getAll();

  constructor(private authorsService: AuthorsService) {}
}
