import { Component } from '@angular/core';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';
  mediaQuery: string = '';
  constructor(private mediaQueryService: MediaQueryService) {
    this.mediaQueryService.obob.subscribe((result: any) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          // console.log(this.displayNameMap.get(query));
          this.mediaQuery =
            this.mediaQueryService.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
  }
}
