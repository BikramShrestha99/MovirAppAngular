import { Injectable } from '@angular/core';
import { AddMovieComponent } from '../add-Movie/add-Movie.component';
import { AddMovie } from '../models/add-movie.model';
import { GetMovie } from '../models/get-movie';
import { Observable, ObservableNotification } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 

  constructor(private http:HttpClient) { }
  
  addCategory(model:AddMovie):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Movie/Create`,model)
  }
  
  getMovie():Observable<GetMovie[]>{
    return this.http.get<GetMovie[]>(`https://localhost:7169/api/Movie/GetAllMovie`)
  }
 
  getMovieById(id: number): Observable<GetMovie> {
    return this.http.get<GetMovie>(`https://localhost:7169/api/Movie/GetById?id=${id}`)
  }
  updateMovie(model:GetMovie):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Movie/Edit1`,model)
  }
  deleteMovie(id: number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7169/api/Movie/delete?id=${id}`)
  }
  
}