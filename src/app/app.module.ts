import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelocityWidgetComponent } from './ui/widget/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './ui/widget/weather-widget/weather-widget.component';
import { WidgetWrapComponent } from './ui/widget/widget-wrap/widget-wrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './material/shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent,
    WidgetWrapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
