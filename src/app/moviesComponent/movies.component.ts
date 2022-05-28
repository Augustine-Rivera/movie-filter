import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../mock-movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{

  movies = MOVIES;
  title = 'mouse-hover';
  showSummary: boolean;

  constructor() {
    this.showSummary = false;
  }

  showSunmary(hover: boolean) {
    this.showSummary = hover;
  }

}
