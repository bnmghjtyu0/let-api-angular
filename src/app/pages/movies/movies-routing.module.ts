import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    data: {
      breadcrumb: [
        { label: '首頁', url: 'home' },
        { label: '電影列表', url: 'movies', active: true },
      ],
    },
  },
  {
    path: ':id',
    component: MovieComponent,
    data: {
      breadcrumb: [
        { label: '首頁', url: 'home' },
        { label: '電影列表', url: 'movies' },
        { label: '電影內頁', url: 'movie/:id', active: true },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
