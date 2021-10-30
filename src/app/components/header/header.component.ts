import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText = '';

  constructor() {}

  ngOnInit(): void {}

  handleSearchButton($event: MouseEvent) {
    console.log($event);
    this.doSearch();
  }
  handleSearchInputKeyUpEnter($event: Event) {
    console.log($event);
    this.doSearch();
  }

  doSearch() {
    this.searchText += '!';
    console.log('搜尋');
  }
}
