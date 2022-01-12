import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';

  constructor(private http: HttpClient) {}

  callAPI(): void {
    console.log('call api');
    this.http
      .get(
        'https://api.unsplash.com/photos?page=1&client_id=lp-1TrDL9tccaAs5jWqV_8PdaP62WXLVGBIblxVuG3c'
      )
      .subscribe(console.log);

  }
}
