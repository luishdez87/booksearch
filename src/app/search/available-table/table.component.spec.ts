import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderService } from '../loader.service';
import { SearchModule } from '../search.module';
import { Book } from '../search/search.model';

import { AvailableTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: AvailableTableComponent;
  let fixture: ComponentFixture<AvailableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchModule,
        HttpClientTestingModule
      ],
      declarations: [ AvailableTableComponent ],
      providers: [LoaderService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the selected book to favorite list', () => {

    const book1 = {
      key: '01',
      title: 'book1'
    } as Book;

    const book2 = {
      key: '02',
      title: 'book2'
    } as Book;

    component.books = [book1, book2];
    
    component.addToFavorite(book1);
  
    expect(component.books.length).toBe(1);
    expect(component.favorites.length).toBe(1);
  });
});
