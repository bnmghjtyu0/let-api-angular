import { CreateArticleRoutingModule } from './create-article.routing.module';
import { CreateArticleCreationComponent } from './create-article-creation/create-article-creation.component';
import { CreateArticleViewComponent } from './create-article-view/create-article-view.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CreateArticleRoutingModule],
  declarations: [
    CreateArticleComponent,
    CreateArticleViewComponent,
    CreateArticleCreationComponent,
  ],
  exports: [CreateArticleComponent],
  providers: [],
})
export class CreateArticleModule {}
