import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 data = { num: 1 };
  
  plus() {
    ++this.data.num;
  }
}
