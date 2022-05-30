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
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messagaeService: MessageService
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  getMovie(id: number): Observable<Movie>{
    const url = '${this.moviesUrl}/${id}';
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log('fetched movie id=${id}')),
      catchError(this.handleError<Movie>('getMovie id=${id}'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> =>  {
      console.log(error);

      this.log('${operation} failed: ${error.message}');

      return of(result as T);
    }
  }

  private log(message: string){
    this.messagaeService.add('MovieService: ${messagae}');
  }

}

