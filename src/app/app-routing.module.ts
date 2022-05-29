import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './moviesComponent/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  //path: string that matches url in browser address bar
  //component: Component that the router should create when navigating to this route.
  //match the url to path:movies and display MoviesComponent.
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: MovieDetailComponent},
];

//initialize router and startmto listen for browser location changes.
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)//home base
  ],
  exports: [RouterModule]//make available throughout application.
})
export class AppRoutingModule { }
