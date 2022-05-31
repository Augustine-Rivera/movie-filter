//Movie detail component displays brief description, movie title/picture, link to trailer and link to watch movie.
import { Component, OnInit} from '@angular/core';
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
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute, //info about route to this instance of movieDetailComponent
    private movieService: MovieService,//gets hero data from remote server and will use to get movie-to-display
    private location: Location //Interacting with browser.
  ) { }


  ngOnInit(): void {
    this.getMovie();
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
