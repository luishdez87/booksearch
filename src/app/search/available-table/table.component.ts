import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { LoaderService } from '../loader.service';
import { Book } from '../search/search.model';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'search-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class AvailableTableComponent implements AfterViewInit {
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'first_publish_year', 'author_name', 'actions']
  loading: boolean = false;
  favorites: Book[] = [];
  @ViewChild(MatTable) table!: MatTable<Book>;

  constructor(
    private searchService: SearchService,
    private loaderService: LoaderService
    ) {}

  ngAfterViewInit(): void {
    this.searchService.books.subscribe(books => {
      this.books = books;
      this.table.renderRows();
    });

    this.loaderService.loader.subscribe(status => {      
      this.loading = status;
    });
    this.searchService.favorites.subscribe(books => {
      this.favorites = books;
      this.table.renderRows();
    });
  }

  addToFavorite(book: Book) {
    const index = this.books.findIndex(item => item.key === book.key);
    const found = this.favorites.find(item => item.key === book.key);
    if (!found) {
      this.favorites.push(book);
      this.books.splice(index, 1);
      this.searchService.updateFavorites(this.favorites);
      this.searchService.updateList(this.books);
    }
  }
}
