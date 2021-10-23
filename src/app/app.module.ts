import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  //宣稱 Component
  declarations: [AppComponent, HeaderComponent, FooterComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  //bootstrap 啟動
  bootstrap: [AppComponent],
})
export class AppModule {}
