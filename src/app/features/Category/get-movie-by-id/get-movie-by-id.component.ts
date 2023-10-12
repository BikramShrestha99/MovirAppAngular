import { Component, OnInit, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetComment } from '../models/get-comment';
import { AddComment } from '../models/add-comment';

@Component({
  selector: 'app-get-movie-by-id',
  templateUrl: './get-movie-by-id.component.html',
  styleUrls: ['./get-movie-by-id.component.scss']
})

export class GetMovieByIdComponent implements OnInit {
  movie!: GetMovie;
  id!: string;
  comments:GetComment[]=[];
  comment:AddComment={
    commentDesc:'',
    timeStamp:new Date(),
  };
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
 

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

    //getting MovieComment
    const MovieId:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCommentByMovieId(MovieId).subscribe(
      (comments: GetComment[]) => {
        this.comments = comments;
        console.log(this.comments);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );  
  }
  addComment(){
      const MoviesId:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.addCommentByMovieId(MoviesId,this.comment).subscribe({
      next: (response) => {
        console.log("Comment added successfully!", response);

        this.comment = {
          commentDesc: '', // Set commentDesc to an empty string or default value
          timeStamp:new Date()
        };

        this.categoryService.getCommentByMovieId(MoviesId).subscribe(
          (comments: GetComment[]) => {
            this.comments = comments;
            console.log("Updated comments:", this.comments);
            
            // Once comments are updated, navigate to the route
            this.router.navigate(['.', { relativeTo: this.route }]);
          },
          error => {
            console.error('Error loading comments:', error);
            // Handle error loading comments, optionally navigate to an error route
          }
        );
      },
      error: (error) => {
        console.error("Error adding comment:", error);
      }
    });
  }
}
  //   //addingMovieComment
  //   addComment() {
  //   const MoviesId:number=Number(this.route.snapshot.paramMap.get('id'));
  //   this.categoryService.addCommentByMovieId(MoviesId,comments).subscribe({
  //     next: (response) => {
  //       console.log("Comment added successfully!", response);
  //     },
  //     error: (error) => {
  //       console.error("Error adding comment:", error);
  //     }
  //   });
  // }
  





