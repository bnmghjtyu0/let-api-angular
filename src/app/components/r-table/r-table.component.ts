import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'r-table',
  templateUrl: './r-table.component.html',
  styleUrls: ['./r-table.component.scss'],
})
export class RTableComponent {
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() columns: string[] = [];

  constructor() {}
}
