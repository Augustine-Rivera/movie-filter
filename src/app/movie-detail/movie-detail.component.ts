import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  //@Input() movie?: Movie;
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute, //info about route to this instance of movieDetailComponent
    private movieService: MovieService,//gets hero data from remote server and will use to get movie-to-display
    private location: Location //Interacting with browser.
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  save(): void {
    if(this.movie) {
      this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
    }
  }

  getMovie(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void{
    this.location.back();
  }

}
