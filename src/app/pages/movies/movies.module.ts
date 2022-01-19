import { SharedModule } from './../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const component = [MovieComponent, MoviesComponent];

@NgModule({
  declarations: [...component],
  imports: [CommonModule, SharedModule, MoviesRoutingModule],
  exports: [...component],
})
export class MoviesModule {}
