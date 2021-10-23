import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  constructor(private http: HttpClient) {
    this.http.get<Article[]>('api/articles.json').subscribe((res) => {
      this.data = res;
    });
  }
  doSearch(value: string) {
    // 關注點分離
    this.result = value;
  }
}
