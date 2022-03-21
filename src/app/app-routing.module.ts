import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-article' },
  {
    path: 'create-article',
    loadChildren: () =>
      import('./pages/create-article/create-article.module').then(
        (m) => m.CreateArticleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
