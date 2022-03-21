import { AfterViewInit, Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Book } from '../search/search.model';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'favorite-table',
  templateUrl: './favorite-table.component.html',
  styleUrls: ['./favorite-table.component.scss']
})
export class FavoriteTableComponent implements AfterViewInit {
  favorites: Book[] = [];
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'first_publish_year', 'author_name', 'actions']
  @ViewChild(MatTable) table!: MatTable<Book>;
  constructor(
    private searchService: SearchService
  ) { }

  ngAfterViewInit(): void {
    this.searchService.favorites.subscribe(books => {  
      this.favorites = books;
      this.table.renderRows();
    });
    this.searchService.books.subscribe(books => {
      this.books = books;
    })
  }

  removeFromFavorite(book: Book): void {
    const index = this.favorites.findIndex(item => item.key === book.key);
    const found = this.books.find(item => item.key === book.key);
    if (!found) {
      this.books.push(book);
      this.favorites.splice(index, 1);
      this.searchService.updateFavorites(this.favorites);
      this.searchService.updateList(this.books);
    }
  }
}
