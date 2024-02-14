import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { SimpleBook } from '../interfaces/simple-book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseUrl: string
  ) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  put(id: number, book: Book) {
    return this.http.put<any>(`${this.baseUrl}/books/${id}`, book, {
      observe: 'response',
    });
  }
}
