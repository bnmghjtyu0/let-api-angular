import { Component, OnInit } from '@angular/core';
import { lists } from '../../api/list';
import { Article } from '../../api/models/article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor() {}

  ngOnInit(): void {
    this.articles = lists;
  }
}
