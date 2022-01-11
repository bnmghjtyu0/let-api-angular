import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: [{ label: '首頁', url: 'home' }] },
  },
  {
    path: 'movies',
    component: MoviesComponent,
    data: {
      breadcrumb: [
        { label: '首頁', url: 'home' },
        { label: '電影列表', url: 'movies' },
      ],
    },
    children: [
      {
        path: ':id',
        data: {
          breadcrumb: [
            { label: '電影資訊', url: 'movie' },
          ],
        },
        component: MovieComponent,
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
