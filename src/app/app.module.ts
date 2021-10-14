import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/products.service';
import { SharedPrimeNGModule } from './shared/primeng-modules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RTableComponent } from './components/rtable/rtable.component';

@NgModule({
  declarations: [AppComponent, RTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedPrimeNGModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
