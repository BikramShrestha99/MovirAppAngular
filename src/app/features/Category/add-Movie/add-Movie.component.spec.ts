import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieComponent } from './add-Movie.component';

describe('AddCategoryComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMovieComponent]
    });
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
