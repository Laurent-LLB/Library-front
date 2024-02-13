import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-author-details-page',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './author-details-page.component.html',
  styleUrl: './author-details-page.component.css',
})
export class AuthorDetailsPageComponent {
  author: Author | undefined;

  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorsService.get(id).subscribe((author) => (this.author = author));
  }
}
