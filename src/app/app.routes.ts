import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { AuthorDetailsPageComponent } from './components/author-details-page/author-details-page.component';
import { BookEditPageComponent } from './components/book-edit-page/book-edit-page.component';
import { AuthorEditPageComponent } from './components/author-edit-page/author-edit-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainPageComponent },
  { path: 'authors', component: AuthorsPageComponent },
  { path: 'authors/:id', component: AuthorDetailsPageComponent },
  { path: 'authors/:id/edit', component: AuthorEditPageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'books/:id', component: BookDetailsPageComponent },
  { path: 'books/:id/edit', component: BookEditPageComponent },
  { path: '**', pathMatch: 'full', component: ErrorPageComponent },
];
