import { MovieService } from './../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title!: string;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  handleMovie() {
    const response = {
      name: 'Richard',
    };
    this.movieService.handleClick(response, this.postMovieA);
  }

  postMovieA(data: any) {
    console.log('postMovie',data);
  }

}
