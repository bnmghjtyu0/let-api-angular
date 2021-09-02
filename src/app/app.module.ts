import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-modules';
import { A11yNavbarComponent } from './components/a11y-navbar/a11y-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RTableComponent } from './components/r-table/r-table.component';
@NgModule({
  declarations: [AppComponent, A11yNavbarComponent, RTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
