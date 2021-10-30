import { Article } from './api/models/article';
import { ArticlesService } from './services/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subTitle = `A place to share your <u>knowledge</u>.`;
  articles: Article[] = [];
  //等待畫面更新才會訂閱
  articles$ = this.articlesService.getArticle();
  cacheArticles: Article[] = [];
  searchText = '';

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    // this.articlesService.getArticle().subscribe({
    //   next: (res) => {
    //     this.articles = res;
    //     this.cacheArticles = res;
    //   },
    // });
  }

  onSearchText($event: any) {
    let searchText = $event;
    if (searchText === '') {
      this.articles = this.cacheArticles;
    }
    this.articles = this.filterArticles(searchText);
  }
  filterArticles(text: string) {
    return this.articles.filter(
      (article) => article.title.indexOf(text) !== -1
    );
  }
}
