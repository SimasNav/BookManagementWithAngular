import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:8080/book';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.url}/get`);
  }

  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete<Book>(`${this.url}/${id}`);
  }

  createBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.url}`, book);
  }
}
