import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './moviesComponent/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { InMemoryDataService } from './in-memory-data.service';


const routes: Routes = [
  //path: string that matches url in browser address bar
  //component: Component that the router should create when navigating to this route.
  //match the url to path:movies and display MoviesComponent.
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: MovieDetailComponent},
  {path: 'movie/homepage', component: InMemoryDataService},
];

//initialize router and startmto listen for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//make available throughout application.
})
export class AppRoutingModule { }
