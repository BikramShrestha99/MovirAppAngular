import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './features/Category/list-Movie/list-Movie.component';
import { AddMovieComponent } from './features/Category/add-Movie/add-Movie.component';
import { GetMovieByIdComponent } from './features/Category/get-movie-by-id/get-movie-by-id.component';
import { UpdateMovieComponent } from './features/Category/update-movie/update-movie.component';
import { DeleteMovieComponent } from './features/Category/delete-movie/delete-movie.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListUserComponent } from './features/User/list-user/list-user.component';
import { GetUserByIdComponent } from './features/User/get-user-by-id/get-user-by-id.component';
import { DeleteUsesrComponent } from './features/User/delete-usesr/delete-usesr.component';
import { authGuard } from './auth-guard/auth.constants';
// import { authGuard } from './auth/auth.constants';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home/dashboard',canActivate: [authGuard],component:HomepageComponent},
  {path:'home/user',canActivate: [authGuard],component:ListUserComponent},
  {path:'home/user/getuser/:id',canActivate: [authGuard],component:GetUserByIdComponent}, 
  {path:'home/user/deleteuser/:id',canActivate: [authGuard],component:DeleteUsesrComponent}, 
  {path:'admin/categories', canActivate: [authGuard],component:ListMovieComponent},
  {path:'admin/categories/add', canActivate: [authGuard],component:AddMovieComponent },
  {path:'admin/categories/getmovie/:id',canActivate: [authGuard],component:GetMovieByIdComponent  }, 
  {path:'admin/categories/updatemovie/:id',canActivate: [authGuard],component:UpdateMovieComponent},
  {path:'admin/categories/deletemovie/:id',canActivate: [authGuard],component:DeleteMovieComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
