import { Component, inject } from '@angular/core';
import { AddMovie } from '../models/add-movie.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  movie!:AddMovie;
  private readonly route = inject(ActivatedRoute);
  private readonly router=inject(Router);
  constructor(private categoryService:CategoryService){
    this.movie={
      Name:"",
      Director:"",
      Genre:"",
      ReleaseDate:null,
      MovieImage:null,
      
    };}
    onFileChange(event:any){
      if(event.target.files && event.target.files.length>0){ 
        const file = event.target.files[0]; 
        this.movie.MovieImage = file;
      }
    
  };
  onFormSubmit(){
    debugger
    const formData = new FormData();
    debugger
    formData.set("Name",this.movie.Name);
    formData.set("Director",this.movie.Director);
    formData.set("Genre",this.movie.Genre);
    if (this.movie.ReleaseDate !== null) {
      formData.set("ReleasedDate", new Date(this.movie.ReleaseDate).toISOString());
  } else {
      formData.set("ReleasedDate", ''); 
  }
  

    if(this.movie.MovieImage){

      formData.append('MovieImage',this.movie.MovieImage,this.movie.MovieImage.name);
    }
    formData.forEach(val => console.log(val));
    this.uploadFormData(formData);
  }


  uploadFormData(formData:FormData){
    this.categoryService.addCategory(formData)
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
