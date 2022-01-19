import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { MoviesModule } from './pages/movies/movies.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    MoviesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
