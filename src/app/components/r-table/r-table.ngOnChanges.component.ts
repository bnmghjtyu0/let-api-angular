import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  ViewChild,
  Input,
  TemplateRef,
  ContentChild,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mockDatas, columns } from './mock/datas';
import { Column, Datas } from './model/r-table';

interface ViewContext<T> {
  $implicit: T;
}

@Component({
  selector: 'r-table',
  templateUrl: './r-table.component.html',
  styleUrls: ['./r-table.component.scss'],
})
export class RTableComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  mainHeaderDef: any = [];
  displayColsDef: any = [];
  dataSource: any = new MatTableDataSource();
  spans: any = [];

  @Input() datas: Datas = [];
  @Input() columns: Column[] = [];

  constructor() {
    console.log('元件重新渲染');
    this.cacheSpan('priority', (d: any) => d.priority);
    this.cacheSpan('status', (d: any) => d.status);
    this.cacheSpan('dateCreated', (d: any) => d.dateCreated);
    this.cacheSpan('testNumber', (d: any) => d.testNumber);
    this.cacheSpan('testCurrency', (d: any) => d.testCurrency);
    this.cacheSpan('testTime', (d: any) => d.testTime);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      switch (propName) {
        case 'datas':
          if (cur.length !== 0 && cur !== prev) {
            this.renderTable(JSON.parse(cur));
          }
      }
    }
  }

  renderTable(datas: Datas) {
    const _columns: Column[] = [...this.columns];

    let displayColsDefTmp = _columns.reduce((acc: any, curr: any) => {
      if (Object.prototype.hasOwnProperty.call(curr, 'columns')) {
        curr.columns.map((v: any) => {
          acc.push(v.accessor);
        });
      } else {
        acc.push(curr.accessor);
      }
      return acc;
    }, []);

    this.dataSource.data = datas;
    this.mainHeaderDef = this.columns.map((head: any) => head.header);
    this.displayColsDef = displayColsDefTmp;
  }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */

  cacheSpan(key: string, accessor: any) {
    for (let i = 0; i < mockDatas.length; ) {
      let currentValue = accessor(mockDatas[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < mockDatas.length; j++) {
        if (currentValue != accessor(mockDatas[j])) {
          break;
        }

        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }
  drop(e: any): void {
    moveItemInArray(this.dataSource.data, e.previousIndex, e.currentIndex);
    this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
  }
  getRowSpan(col: string, index: number) {
    return this.spans[index] && this.spans[index][col];
  }

  getUserViewContext(
    column: Column,
    data: any,
    dataIdx: number
  ): ViewContext<any> {
    return { $implicit: { column, data, i: dataIdx } };
  }
}
