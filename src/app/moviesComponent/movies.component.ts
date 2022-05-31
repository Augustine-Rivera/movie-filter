//Component displaying movies in a table format. Also contains hover feature.
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  
  movies: Movie[]=[];
  
  title = 'mouse-hover';
  showSummary: boolean;
  selectedMovie?: Movie;

  

  constructor(private movieService: MovieService) {
    this.showSummary = false;
  }
  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  showSunmary(hover: boolean) {
    this.showSummary = hover;
  }

  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
  }
  //order of movies should respond based on applied filters. 

}
