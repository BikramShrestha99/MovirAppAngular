import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './features/Category/list-Movie/list-Movie.component';
import { AddMovieComponent } from './features/Category/add-Movie/add-Movie.component';
import { GetMovieByIdComponent } from './features/Category/get-movie-by-id/get-movie-by-id.component';
import { UpdateMovieComponent } from './features/Category/update-movie/update-movie.component';
import { DeleteMovieComponent } from './features/Category/delete-movie/delete-movie.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},

  {path:'admin/categories',component:ListMovieComponent},
  {path:'admin/categories/add',component:AddMovieComponent },
  {path:'admin/categories/getmovie/:id',component:GetMovieByIdComponent  }, 
  {path:'admin/categories/updatemovie/:id',component:UpdateMovieComponent},
  {path:'admin/categories/deletemovie/:id',component:DeleteMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
