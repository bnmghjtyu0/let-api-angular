import { CreateArticleViewComponent } from './create-article-view/create-article-view.component';
import { CreateArticleCreationComponent } from './create-article-creation/create-article-creation.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateArticleComponent, pathMatch: 'full' },
  {
    path: 'creation',
    component: CreateArticleCreationComponent,
    pathMatch: 'full',
  },
  { path: 'view', component: CreateArticleViewComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateArticleRoutingModule {}
