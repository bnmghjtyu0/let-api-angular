import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Logger } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private logger: Logger, private httpClient: HttpClient) {}
}
