import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticle() {
    return this.httpClient.get<any>('assets/api-mocks/articles.json');
  }
}
