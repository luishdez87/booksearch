import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Book, SearchResponse } from "./search.model";

@Injectable()
export class SearchService {
  readonly url = 'https://openlibrary.org/search.json';
  page: number = 1;
  fetching: boolean = false;
  private _favoriteBooks = new BehaviorSubject<Book[]>([]);
  private _booksList = new BehaviorSubject<Book[]>([]);
  constructor(private http: HttpClient) {}

  books = this._booksList.asObservable();
  favorites = this._favoriteBooks.asObservable();

  updateList(list: Book[]) {
    this._booksList.next(list);
  }

  updateFavorites(list: Book[]) {
    this._favoriteBooks.next(list);
  }

  getBooks(query: string, page: number): Observable<Book[]> {
    return this.http.get<SearchResponse>(`${this.url}?q=${query}&page=${page}`)
    .pipe(
      map(response => {
        return response.docs.filter(book => {
          if (book.author_name && book.author_name.length > 0) {
            return book;
          } else {
            return;
          }
        })
      })
    )
  }
}
