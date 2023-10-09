import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMovieByIdComponent } from './get-movie-by-id.component';

describe('GetMovieByIdComponent', () => {
  let component: GetMovieByIdComponent;
  let fixture: ComponentFixture<GetMovieByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMovieByIdComponent]
    });
    fixture = TestBed.createComponent(GetMovieByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
