import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Article {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';
  keyword = '';
  result = '';

  data: Article[] = [];

  data$: Observable<any[]> = of([]);

  constructor(private apiService: ApiService) {
    this.data$ = apiService.getArticle();

  }
  doSearch(value: string) {
    // 關注點分離
    this.result = value;
  }

  deleteArticle(id: any) {
    console.log('article id', id);
  }
}
