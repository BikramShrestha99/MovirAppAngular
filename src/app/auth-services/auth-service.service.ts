import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableNotification } from 'rxjs';
import { baseUrl } from 'src/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  onLogin(obj:any):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/Users/Login`,obj)
  }
}
