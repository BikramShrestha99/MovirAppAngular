import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieComponent } from './list-Movie.component';

describe('CategoryListComponent', () => {
  let component: ListMovieComponent;
  let fixture: ComponentFixture<ListMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMovieComponent]
    });
    fixture = TestBed.createComponent(ListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
