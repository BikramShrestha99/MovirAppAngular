import { Component, OnInit, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-movie-by-id',
  templateUrl: './get-movie-by-id.component.html',
  styleUrls: ['./get-movie-by-id.component.scss']
})

export class GetMovieByIdComponent implements OnInit {
  movie!: GetMovie;
  id!: string;
  private readonly route = inject(ActivatedRoute);

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getMovieById(id).subscribe(
      (movie: GetMovie) => {
        this.movie = movie;
        console.log(this.movie);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
  }
  

  // export class GetMovieByIdComponent implements OnInit{
  //   id!:string;
  //   movie!:GetMovie;
  //   private readonly route = inject(ActivatedRoute);
  
  //   ngOnInit(): void {
  //     const id=this.route.snapshot.paramMap.get('id');
  //     if(id)
  //     {
  //       this.id=id;
  //     }
  //     this.movie=history.state?.movie;
  // }
}






