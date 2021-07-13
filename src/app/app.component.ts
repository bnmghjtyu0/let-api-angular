import { Component } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private movieService: MovieService) {}
  title = 'let-api-angular';

  ngOnInit() {
    this.movieService.getMovies();
  }
}
