import { Article } from './../api/models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticle() {
    return this.httpClient.get<Article[]>('http://localhost:3000/api/articles');
  }
  queryArticle(query: any) {
    return this.httpClient.get<Article[]>(
      `http://localhost:3000/api/articles?q=${query}`
    );
  }
}
