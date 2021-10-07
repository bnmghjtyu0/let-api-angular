import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  ViewChild,
  Input,
  TemplateRef,
  ContentChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mockDatas, columns } from './mock/datas';
import { Column, Data } from './model/r-table';

interface ViewContext<T> {
  $implicit: T;
}

@Component({
  selector: 'r-table',
  templateUrl: './r-table.component.html',
  styleUrls: ['./r-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RTableComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  loading: boolean = false;

  _columns = [];
  @Input()
  set columns(val: any) {
    if (val) {
      this._columns = val;
    }
  }
  get columns() {
    return this._columns;
  }

  @Input()
  set datas(val: any) {
    // if (val.length === 0) {
    //   this.changeDetectorRef.detach();
    // } else {
    //   // 畫面更新
    //   this.changeDetectorRef.reattach();
    // }

    // datas is empty
    if (val.length === 0) {
      this.loading = true;
      return;
    }
    //datas is not empty
    this.dataSource.data = val;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // 遍例所有的 accessor
    let displayColsDefTmp = [...this.columns].reduce((acc: any, curr: any) => {
      //如果有 columns
      if (Object.prototype.hasOwnProperty.call(curr, 'columns')) {
        let accessorInColumns = curr.columns.map((v: any) => v.accessor);
        acc.push(...accessorInColumns);
      } else {
        acc.push(curr.accessor);
      }
      return acc;
    }, []);

    // 資料更新，確保 console 得到最新的資料
    this.displayColsDef = displayColsDefTmp;
    this.mainHeaderDef = this.columns.map((head: any) => head.header);
  }

  mainHeaderDef: any = [];
  displayColsDef: any = [];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  spans: any = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('元件重新渲染')
    this.cacheSpan('priority', (d: any) => d.priority);
    this.cacheSpan('status', (d: any) => d.status);
    this.cacheSpan('dateCreated', (d: any) => d.dateCreated);
    this.cacheSpan('testNumber', (d: any) => d.testNumber);
    this.cacheSpan('testCurrency', (d: any) => d.testCurrency);
    this.cacheSpan('testTime', (d: any) => d.testTime);
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
    data: Data,
    dataIdx: number
  ): ViewContext<any> {
    return { $implicit: { column, data, i: dataIdx } };
  }
}
