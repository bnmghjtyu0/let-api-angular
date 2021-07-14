import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MOVIES } from '../mock-movies';
import { Movie } from '../movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService, public dialog: MatDialog) {}

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
  openDialog(movie: Movie) {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      data: movie,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
