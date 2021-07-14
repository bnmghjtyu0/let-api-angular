import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  movies = MOVIES;

  getMovies() {
    this.movieService.getMovies().subscribe((val) => {
      console.log(val);
      return (this.movies = val.results);
    });
  }
}
