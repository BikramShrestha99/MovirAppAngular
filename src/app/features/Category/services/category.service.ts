import { Injectable } from '@angular/core';
import { AddMovieComponent } from '../add-Movie/add-Movie.component';
import { AddMovie } from '../models/add-movie.model';
import { GetMovie } from '../models/get-movie';
import { Observable, ObservableNotification } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetComment } from '../models/get-comment';
import { AddComment } from '../models/add-comment';
import { UpdateMovie } from '../models/update-movie';




@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 

  constructor(private http:HttpClient) { }
  
  addCategory(model:FormData):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Movie/Create`,model)
  }
  
  getMovie():Observable<GetMovie[]>{
    return this.http.get<GetMovie[]>(`https://localhost:7169/api/Movie/GetAllMovie`)
  }
 
  getMovieById(id: number): Observable<GetMovie> {
    return this.http.get<GetMovie>(`https://localhost:7169/api/Movie/GetById?id=${id}`)
  }
  getMovieEditById(id: number): Observable<UpdateMovie> {
    return this.http.get<UpdateMovie>(`https://localhost:7169/api/Movie/GetById?id=${id}`)
  }
 
  updateMovie(model:FormData):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Movie/Edit`,model)
  }
  deleteMovie(id: number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7169/api/Movie/delete?id=${id}`)
  }

  
  //comment
  getCommentByMovieId(MovieId: number):Observable<GetComment[]>{
    debugger
    return this.http.get<GetComment[]>(`https://localhost:7169/api/Comment/GetCommentByMovieId?MovieId=${MovieId}`)
  }
  addCommentByMovieId(MovieId: number,comment:AddComment):Observable<GetComment[]>{
    debugger
    return this.http.post<GetComment[]>(`https://localhost:7169/api/Comment/CreateMovieComment?MovieId=${MovieId}`,comment)
  }

  
}