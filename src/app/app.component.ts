import { Component } from '@angular/core';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';

  constructor(private fetchService: FetchService) {}
  ngOnInit() {
    this.fetchService.musicMatch().subscribe(console.log);
    this.fetchService.themoviedb().subscribe(console.log);
  }
}
