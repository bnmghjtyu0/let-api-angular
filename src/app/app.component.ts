import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';
  keyword = '';
  result = '';
  doSearch(value: string) {
    // 關注點分離
    this.result = value;
  }
}
