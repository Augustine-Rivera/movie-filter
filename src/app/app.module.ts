import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { MoviesComponent } from './MoviesComponent/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
