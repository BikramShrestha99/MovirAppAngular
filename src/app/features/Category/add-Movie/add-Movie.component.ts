import { Component } from '@angular/core';
import { AddMovie } from '../models/add-movie.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  movie!:AddMovie;
  constructor(private categoryService:CategoryService){
    this.movie={
      Name:"",
      Director:"",
      Genre:"",
      ReleaseDate:new Date(),
      MovieImage:null,
      
    };
    
  }
  onFormSubmit(){
    this.categoryService.addCategory(this.movie)
    .subscribe({
      next:(response)=>{
        console.log('this was successful')
      },
      }
    );
  }

}
