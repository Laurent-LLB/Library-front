import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseUrl: string
  ) {}

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/authors`);
  }
}
