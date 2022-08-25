import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MusicMatch } from './music-match.interface';
import { TheMovieDb } from './themoviedb.interface';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}
  /** 取得電影資料 */
  themoviedb(): Observable<TheMovieDb> {
    return this.http
      .get<TheMovieDb>(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'
      )
      .pipe(
        catchError((error) => {
          console.log('error: ', error);
          return of(error);
        })
      );
  }

  /** 取得歌詞 API */
  musicMatch(): Observable<MusicMatch> {
    return this.http.get<MusicMatch>('/assets/musixmatch.json').pipe(
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );
  }
}
