import { Component, OnInit } from '@angular/core';
import {Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  // push term into observable stream
  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke, otherwise too much traffic for server
      debounceTime(300),

      // ignore new term if same as before
      distinctUntilChanged(),

      // switch to new search observable when search term changes
      switchMap((term: string) => this.movieService.searchMovies(term)),
    );
  }

}
