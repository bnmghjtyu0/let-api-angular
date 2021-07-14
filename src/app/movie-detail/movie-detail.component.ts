import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { MOVIEDETAIL } from '../mock-movies';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieServie: MovieService
  ) {}

  movieDetail = MOVIEDETAIL;
  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieServie
      .getMovieDetail(id)
      .subscribe((val) => (this.movieDetail = val));
  }

  goBack(): void {
    this.location.back();
  }
}
