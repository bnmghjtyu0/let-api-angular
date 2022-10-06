import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrHomeComponent } from './ui/br-home/br-home.component';
import { BkHomeComponent } from './ui/bk-home/bk-home.component';
import { LoginComponent } from './ui/login/login.component';
import { AuthService } from './shared/services/auth.service';
import { Routes, ROUTES } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BrHomeComponent,
    BkHomeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
