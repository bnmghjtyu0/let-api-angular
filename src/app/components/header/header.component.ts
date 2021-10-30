import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText = '';
  isHighLight: boolean = false;
  fontSize = 12;
  alertMsg = '請輸入查詢條件';

  @Output() onSearchText: EventEmitter<any> = new EventEmitter();
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
    console.log('搜尋');

    this.onSearchText.emit(this.searchText);
  }
}
