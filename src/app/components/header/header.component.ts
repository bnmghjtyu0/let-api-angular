import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText = '';
  isHighLight = false;
  fontSize = 12;

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
    this.isHighLight = !this.isHighLight;
    this.fontSize += 2;
    this.searchText += '!';
    console.log('搜尋');
  }
}
