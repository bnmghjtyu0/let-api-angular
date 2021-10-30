import { ArticlesService } from './services/articles.service';
import { Article } from './api/models/article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private articlesService: ArticlesService) {}
  transform(value: Article[], searchText: string): unknown {
    return this.articlesService.getArticleByKeyWord(value, searchText);
  }
}
