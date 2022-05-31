import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { MoviesComponent } from './moviesComponent/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MessagesComponent } from './messages/messages.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
=======
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MoviesComponent,
    DashboardComponent,
    MovieDetailComponent,
<<<<<<< HEAD
    MessagesComponent,
    MovieSearchComponent,
=======
    
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
