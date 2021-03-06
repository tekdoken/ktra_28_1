import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const A = "http://localhost:3000/books/"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(A)
  }

  save(b: Book): Observable<Book> {
    return this.http.post<Book>(A, b)
  }

  getOne(id: any): Observable<Book> {
    return this.http.get<Book>(A + `${id}`)
  }

  delete(id: any) {
    return this.http.delete<Book>(A + `${id}`)
  }

  update(id: any,b:Book): Observable<Book> {
    return this.http.put<Book>(A + `${id}`,b)
  }
}

