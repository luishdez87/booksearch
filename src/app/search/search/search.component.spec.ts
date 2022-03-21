import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { LoaderService } from '../loader.service';
import { SearchModule } from '../search.module';

import { SearchComponent } from './search.component';
import { Book } from './search.model';
import { SearchService } from './search.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchModule,
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [ SearchComponent ],
      providers: [
        LoaderService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service on submit', () => {
    const query = 'test';
    let service = TestBed.inject(SearchService);
    let book = {
      key: '01',
      title: 'Test book'
    } as Book;
    const serviceSpy = spyOn(service, 'getBooks').and.returnValue(of([book]))
    component.search = query;
    component.submit();

    expect(serviceSpy).toHaveBeenCalledWith(query, component.page);
  });

  it('should clear query and list on clearSearch', () => {
    const query = 'test';
    component.clearSearch();

    expect(component.search).toEqual(null);
    expect(component.books.length).toBe(0);
  })
});
