import { Component, Input, OnInit, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']

})
export class ListMovieComponent {
  private readonly router=inject(Router);
  private readonly route=inject(ActivatedRoute);
  movies:GetMovie[]=[];
  constructor(private categoryService:CategoryService)
  {

  }
  @Input() movie!: GetMovie;
  ngOnInit(): void {
    debugger
    this.categoryService.getMovie().subscribe(
      (movies: GetMovie[]) => {
        this.movies = movies;
        console.log(this.movies);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
  }
  goToItemDetails(movie: GetMovie):void{
    this.router.navigate(['getmovie',movie.id],{state:{movie},relativeTo: this.route}).then();
  }
  goToItemEdit(movie: GetMovie):void{
    this.router.navigate(['updatemovie',movie.id],{state:{movie},relativeTo: this.route}).then();
  }
  goToItemDelete(movie: GetMovie):void{
    this.router.navigate(['deletemovie',movie.id],{state:{movie},relativeTo: this.route}).then();
  }
}
