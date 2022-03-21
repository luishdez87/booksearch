import { Component, OnInit } from '@angular/core';
import { Book } from './search.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string | null = null;
  page: number = 1;
  books: Book[] = [];
  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.books.subscribe(books => {
      this.books = books;
    })
  }

  submit() {
    if (this.search !== '' && this.search !== null) {
      this.searchService.getBooks(this.search, this.page).subscribe(books => {
        this.searchService.updateList(books);
      });
    }
  }

  clearSearch(): void {
    this.search = null;
    this.searchService.updateList([]);
  }
}
