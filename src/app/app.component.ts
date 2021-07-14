import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MOVIES } from './mock-movies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private movieService: MovieService) {}
  title = 'let-api-angular';

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
