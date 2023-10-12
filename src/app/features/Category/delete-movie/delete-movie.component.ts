import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { GetMovie } from '../models/get-movie';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent {
  movie!: GetMovie;
  id!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.deleteMovie(id).subscribe({
        next: (response) => {
            console.log('Movie deleted successfully');
            this.router.navigate(['admin/categories']);
        },
        error: (error) => {
            console.error('Error deleting movie: ', error);
        }
    });
  
  }
}
