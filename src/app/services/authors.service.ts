import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { SimpleAuthor } from '../interfaces/simple-author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseUrl: string
  ) {}

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/auteurs`);
  }

  get(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/auteurs/${id}`);
  }

  getSimple(id: number): Observable<SimpleAuthor> {
    return this.http.get<SimpleAuthor>(`${this.baseUrl}/auteurs/${id}`);
  }

  put(id: number, author: SimpleAuthor) {
    return this.http.put<any>(`${this.baseUrl}/auteurs/${id}`, author, {
      observe: 'response',
    });
  }

  post(author: Author) {
    return this.http.post<any>(`${this.baseUrl}/auteurs`, author, {
      observe: 'response',
    });
  }
}
