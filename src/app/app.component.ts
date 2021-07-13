import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // the component's CSS element selector
  templateUrl: './app.component.html', //the location of the component's template file.
  styleUrls: ['./app.component.scss'], //the location of the component's private CSS styles.
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'let-api-angular';

  ngOnInit() {}
}
