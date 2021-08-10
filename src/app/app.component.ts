import { Component, OnInit } from '@angular/core';
import { Logger } from './services/logger.service';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mediaQuery: string = '';
  constructor(
    private logger: Logger,
    private mediaQueryService: MediaQueryService
  ) {
    this.mediaQueryService.obob.subscribe((result: any) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          // console.log(this.displayNameMap.get(query));
          this.mediaQuery = this.mediaQueryService.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
  }

  ngOnInit(): void {}

  handleClick() {
    this.logger.log('Getting heroes ...');
  }
}
