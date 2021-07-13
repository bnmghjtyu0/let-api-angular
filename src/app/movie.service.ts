import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // res = await fetchUser('movie/now_playing', {
  //   language: 'zh-TW',
  //   page: 2,
  // });

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<[]>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c'
    );
  }
}
