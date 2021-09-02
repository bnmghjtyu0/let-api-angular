import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Logger } from './services/logger.service';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  emailsDataSource = new MatTableDataSource<any>();

  constructor(private logger: Logger, private httpClient: HttpClient) {}

  ngOnInit(): void {
    let url = `https://api.github.com/search/issues?q=angular/material&page=1`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      console.log(data);
      this.emailsDataSource.data = data.items;
    });
  }
}
