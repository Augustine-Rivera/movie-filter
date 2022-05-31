import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movie';
import { MoviesComponent } from './moviesComponent/movies.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

    /** get movie by id. Return `undefined` when id not found */
    getHeroNo404<Data>(id: number): Observable<Movie> {
      const url = `${this.moviesUrl}/?id=${id}`;
      return this.http.get<Movie[]>(url)
        .pipe(
          map(movies => movies[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? 'fetched' : 'did not find';
            this.log(`${outcome} movie id=${id}`);
          }),
          catchError(this.handleError<Movie>(`getMovie id=${id}`))
        );
    }

  getMovie(id: number): Observable<Movie> {
    const url = '${this.moviesUrl}/${id}';
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log('fetched movie id=${id}')),
      catchError(this.handleError<Movie>('getMovie id=${id}'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log('${operation} failed: ${error.message}');

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add('MovieService: ${message}');
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      tap(_ => this.log('updated movie id=${movie.id}')),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()){
      return of([]); // return empty array if no search term
    }
    return this.http.get<Movie[]>('$(this.moviesUrl}/?name=${term}').pipe(
      tap(x => x.length ?
        this.log('found movies matching "${term}"') :
        this.log('no movies matching "${term}"')),
        catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  

}

