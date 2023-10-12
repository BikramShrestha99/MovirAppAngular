import { Component, Input, OnInit, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Auth/login/auth-services/auth-service.service';
import { GetUser } from '../../User/user-models/get-user';

@Component({
  selector: 'app-category-list',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']

})
export class ListMovieComponent implements OnInit {
  searchText!:string;
  private readonly router=inject(Router);
  private readonly route=inject(ActivatedRoute);
  movies:GetMovie[]=[];
  pagedMovies: any[] = []; // Movies for the current page
  totalMovies: number = 0; // Total number of movies
  pageSize: number = 4; // Number of movies per page
  currentPage: number = 1; // Current page number

  // hasToken(): boolean {
  //   // Check if token exists in localStorage
  //   const token = localStorage.getItem('token');
  //   return token !== null && token !== undefined;
  // }
  constructor(private categoryService:CategoryService ,public authService: AuthServiceService ){}
 
  ngOnInit(): void {
    this.categoryService.getMovie().subscribe(
      (movies: GetMovie[]) => {
        this.movies = movies;
        this.totalMovies = this.movies.length;
        this.setPage(1); 
       
      },
       
      error => {
        console.error('Error loading movies:', error);
      }
    );
    }

  onPageChange(event: any): void {
    this.setPage(event.pageIndex + 1);
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalMovies);
    this.pagedMovies = this.movies.slice(startIndex, endIndex);
  }

  goToItemDetails(movie: GetMovie): void {
    this.router.navigate(['getmovie', movie.id], { state: { movie }, relativeTo: this.route }).then();
  }

  goToItemEdit(movie: GetMovie): void {
    this.router.navigate(['updatemovie', movie.id], { state: { movie }, relativeTo: this.route }).then();
  }

  goToItemDelete(movie: GetMovie): void {
    this.router.navigate(['deletemovie', movie.id], { state: { movie }, relativeTo: this.route }).then();
  }
}