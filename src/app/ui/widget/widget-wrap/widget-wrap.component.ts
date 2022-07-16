import { Widget } from './../widget.interface';
import { Component, ContentChild } from '@angular/core';
import { WIDGET_TOKEN } from '../widget.token';

@Component({
  selector: 'app-widget-wrap',
  templateUrl: './widget-wrap.component.html',
  styleUrls: ['./widget-wrap.component.scss'],
})
export class WidgetWrapComponent {
  //使用 static:true 才能在生命週期內使用
  @ContentChild(WIDGET_TOKEN as any)
  widget!: Widget;

  onRefresh() {
    this.widget.refresh();
  }
}
