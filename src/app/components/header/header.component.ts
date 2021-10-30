import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHighLight: boolean = false;
  fontSize = 12;
  alertMsg = '請輸入查詢條件';

  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter();
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

    this.searchTextChange.emit(this.searchText);
  }
}
