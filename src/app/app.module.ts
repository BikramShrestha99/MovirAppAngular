import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListMovieComponent } from './features/Category/list-Movie/list-Movie.component';
import { AddMovieComponent } from './features/Category/add-Movie/add-Movie.component';
import { GetMovieByIdComponent } from './features/Category/get-movie-by-id/get-movie-by-id.component';
import { UpdateMovieComponent } from './features/Category/update-movie/update-movie.component';
import { DeleteMovieComponent } from './features/Category/delete-movie/delete-movie.component';
import { LoginComponent } from './Auth/login/login.component';
import {FlexLayoutModule} from '@angular/flex-Layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomInterceptorService } from './auth-services/custom-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMovieComponent,
    AddMovieComponent,
    GetMovieByIdComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule ,
    MatCardModule ,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:CustomInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
