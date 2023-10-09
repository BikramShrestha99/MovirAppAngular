import { Component, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent {
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
  goToUpdateItem(){
    this.categoryService.updateMovie(this.movie)
    .subscribe({
      next:(response)=>{
        console.log('this was successful')
      },
      }
    );
  }
}

