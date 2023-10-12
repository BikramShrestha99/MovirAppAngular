import { Component, inject } from '@angular/core';
import { GetMovie } from '../models/get-movie';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { UpdateMovie } from '../models/update-movie';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent {
  // movie!: GetMovie;
  updateMovie!:UpdateMovie;

  id!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    const id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getMovieEditById(id).subscribe(
      (updateMovie: UpdateMovie) => {
        this.updateMovie = updateMovie;
        console.log(this.updateMovie);
      },
      error => {
        console.error('Error loading movies:', error);      
      }
    );
  }
  onFileChange(event:any){
    if(event.target.files && event.target.files.length>0){ 
      const file = event.target.files[0]; 
      this.updateMovie.movieImage = file;
    }
  
};
onFormSubmit(){
  debugger
  const formData = new FormData();
  formData.set("id", this.updateMovie.id.toString());
  formData.set("name",this.updateMovie.name);
  formData.set("director",this.updateMovie.director);
  formData.set("genre",this.updateMovie.genre);
  formData.set("releasedDate",new Date(this.updateMovie.releaseDate).toISOString());

  if(this.updateMovie.movieImage){

    formData.append('movieImage',this.updateMovie.movieImage,this.updateMovie.movieImage.name);
  }
  formData.forEach(val => console.log(val));
  this.uploadFormData(formData);
}


uploadFormData(formData:FormData){
  debugger
  this.categoryService.updateMovie(formData)
  .subscribe({
    next: (response) => {
      console.log("Successful!!!",response);
      this.router.navigate(['admin/categories']);
    },
    error: (error) => {
      console.log("Error occured",error);
    }

  });
 }
}

