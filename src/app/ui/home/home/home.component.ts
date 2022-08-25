import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FetchService } from 'src/app/services/fetch.service';
import { MusicMatch, TrackList } from 'src/app/services/music-match.interface';
import { Result, TheMovieDb } from 'src/app/services/themoviedb.interface';
import { Column } from 'src/app/shared/components/table/common-table';

/** 取得物件某 key 值的型別 */
export type PickObj<T, U extends keyof T> = T[U];

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  musicMatch$ = new BehaviorSubject<any[] | null>(null);
  // musicMatch 共用的 observable
  musicMatchGET$ = this.fetchService.musicMatch().pipe(
    map((data) => data.message.body.track_list),
    shareReplay(1)
  );

  // themoviedb 共用的 observable
  themoviedb$: Observable<any> = this.fetchService.themoviedb().pipe(
    map((data) => data.results as PickObj<TheMovieDb, 'results'>),
    shareReplay(1)
  );

  themoviedbColumn: Column[] = [
    {
      header: ' id',
      cell: (data: Result) => data.id,
    },
    {
      header: 'title',
      cell: (data: Result) => data.title,
    },
    {
      header: '上映日期',
      cell: (data: Result) => data.release_date,
    },
    {
      header: '排行榜',
      cell: (data: Result) => data.popularity,
    },
  ];

  musicMatchColumn: Column[] = [
    {
      header: '專輯 id',
      cell: (data: TrackList) => data.track.album_id,
    },
    {
      header: '專輯名稱',
      cell: (data: TrackList) => data.track.album_name,
    },
    {
      header: '歌手 id',
      cell: (data: TrackList) => data.track.artist_id,
    },
    {
      header: '歌手',
      cell: (data: TrackList) => data.track.artist_name,
    },
    {
      header: '更新時間',
      cell: (data: TrackList) => data.track.updated_time,
    },
    {
      header: '功能',
      accessor: 'feature',
    },
  ];

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.musicMatchGET$.subscribe({
      next: (data) => {
        this.musicMatch$.next(data);
      },
    });
  }

  delete(data: any, dataIndex: number) {
    if (!this.musicMatch$.value) return;
    const copy = [...this.musicMatch$.value];
    copy.splice(dataIndex, 1);
    this.musicMatch$.next(copy);
  }
}
