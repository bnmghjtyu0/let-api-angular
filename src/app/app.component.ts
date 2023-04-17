import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('paginator') paginator!: CustomPaginatorComponent;
  title = 'let-api-angular';
  tableData: Datum[] = [];
  paginatorConfig = {
    totalCount: 0,
    currentPage: 0,
  };

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          const obj = {
            limit: 10,
            page: this.paginator.pageIndex + 1,
            offset: 1,
          };

          const entries: any = Object.entries(obj);
          const params = new URLSearchParams(entries).toString();

          return this.http
            .get<CategoryRes>(
              `https://musiclight-pochange.tw/api/youtube/category?${params}`
            )
            .pipe(catchError(() => of(null)));
        }),
        map((empData) => {
          if (empData == null) return [];
          this.tableData = empData.retVal.data;
          this.paginatorConfig.totalCount = empData.retVal.paging.pages;
          this.paginatorConfig.currentPage = empData.retVal.paging.page;
          return empData.retVal.data;
        })
      )
      .subscribe((empData) => {
        console.log(empData);
        // this.dataSource = new MatTableDataSource(this.EmpData);
      });
  }
}

export interface CategoryRes {
  retCode: number;
  retMsg: string;
  retVal: RetVal;
}

export interface RetVal {
  data: Datum[];
  paging: Paging;
}

export interface Datum {
  id: number;
  video: Video;
  type: Type;
  typeId: number;
  country: Country;
  countryId: number;
  singer: string;
  singerId: null;
  startTime: null;
  endTime: null;
}

export enum Country {
  國語 = '國語',
  日本 = '日本',
  韓國 = '韓國',
}

export enum Type {
  音樂 = '音樂',
}

export interface Video {
  lists: Lists;
  id: number;
  name: string;
  videoId: string;
  startTime: null;
  endTime: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lists {
  kind: ListsKind;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: string;
  snippet: Snippet;
}

export enum ItemKind {
  YoutubeVideo = 'youtube#video',
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: LiveBroadcastContent;
  defaultLanguage?: string;
  localized: Localized;
  defaultAudioLanguage?: string;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard?: Default;
  maxres?: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export enum ListsKind {
  YoutubeVideoListResponse = 'youtube#videoListResponse',
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Paging {
  total: number;
  page: number;
  pages: number;
}
