import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET_TOKEN } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{ provide: WIDGET_TOKEN, useExisting: VelocityWidgetComponent }],
})
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('load');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
