import { Article } from './../api/models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticle() {
    return this.httpClient.get<Article[]>('assets/api-mocks/articles.json');
  }
}
