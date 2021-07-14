import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent, MovieDetailComponent, MoviesComponent, MovieDialogComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
