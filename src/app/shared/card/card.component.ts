import { MovieService } from './../../core/services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardTitle!: string;
  constructor(private movieService: MovieService) {}

  handleClick() {
    const response = {
      name: 'card',
    };
    this.movieService.handleClick(response, this.loadNextApi.bind(this));
  }

  loadNextApi() {
    //卡片元件找不到 this
    console.log(this.cardTitle);
    console.log('loadNextApi');
  }


}
