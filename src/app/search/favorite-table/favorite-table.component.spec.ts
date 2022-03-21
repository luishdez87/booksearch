import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchModule } from '../search.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FavoriteTableComponent } from './favorite-table.component';
import { Book } from '../search/search.model';

describe('FavoriteTableComponent', () => {
  let component: FavoriteTableComponent;
  let fixture: ComponentFixture<FavoriteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchModule,
        HttpClientTestingModule
      ],
      declarations: [ FavoriteTableComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove the selected book from favorite list', () => {

    const book1 = {
      key: '01',
      title: 'book1'
    } as Book;

    const book2 = {
      key: '02',
      title: 'book2'
    } as Book;

    component.favorites = [book1, book2];
    
    component.removeFromFavorite(book1);
  
    expect(component.favorites.length).toBe(1);
    expect(component.books.length).toBe(1);
  });
});
