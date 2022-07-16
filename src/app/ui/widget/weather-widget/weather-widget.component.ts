import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET_TOKEN } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [{ provide: WIDGET_TOKEN, useExisting: WeatherWidgetComponent }],
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;
  load() {
    console.log('load');
  }
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
