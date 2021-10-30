import { Article } from './../api/models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticle() {
    return this.httpClient.get<Article[]>('/api/articles');
  }
  queryArticle(query: any) {
    return this.httpClient.get<Article[]>(
      `/api/articles?q=${query}`
    );
  }

  getArticleByKeyWord(article: any, searchText: any) {
    return article.filter(
      (article: any) => article.title.indexOf(searchText) !== -1
    );
  }
}
