import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  /*title: string;
  homepage: string;
  movies: MovieService;
  movies = new MovieService();
  title: string[] =[]*/

  constructor() { }

  ngOnInit(): void {
  }

}
