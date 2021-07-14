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

  getMovies(currentPage: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&page=${currentPage}`
    );
  }

  getYoutubeSearch(q: string) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${q}&key=AIzaSyBnGZCvyS4VK_syT1449aCpcHXunSq3V2k`;
    return this.http.get<any>(url);
  }
  getMovieDetail(id: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=23785b1559bb39249c40d56934f80e6c`
    );
  }
}
