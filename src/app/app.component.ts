import { ArticlesService } from './services/articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conduit';
  subTitle = `A place to share your <u>knowledge</u>.`;

  constructor(private articlesService: ArticlesService) {
    // this.articlesService.getArticle().subscribe(console.log)
  }
}
