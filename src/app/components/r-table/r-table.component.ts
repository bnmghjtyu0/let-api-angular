import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DATA } from './datas';
interface Columns {
  header: string;
  headerLabel: string;
  accessor: string;
  rowspan: number;
  colspan: number;
  columns?: Array<{ accessor: string }>;
}

@Component({
  selector: 'r-table',
  templateUrl: './r-table.component.html',
  styleUrls: ['./r-table.component.scss'],
})
export class RTableComponent {
  @Input() datas = new MatTableDataSource<any>();

  mainHeaderDef = [];
  displayColsDef = [];

  columns: any = [
    {
      header: 'priority-g',
      headerLabel: '名稱 priority',
      accessor: 'priority',
      rowspan: 2,
      colspan: 1,
    },
    {
      header: 'status-g',
      headerLabel: '名稱 status',
      accessor: 'status',
      rowspan: 2,
      colspan: 1,
    },
    {
      header: 'testCurrency-g',
      headerLabel: '名稱 testCurrency',
      accessor: 'testCurrency',
      rowspan: 2,
      colspan: 1,
    },
    {
      header: 'testTime-g',
      headerLabel: '名稱 testTime',
      accessor: 'testTime',
      rowspan: 2,
      colspan: 1,
    },
    {
      header: 'dateCreated-g',
      headerLabel: '名稱 group1',
      accessor: 'dateCreated',
      rowspan: 1,
      colspan: 2,
      columns: [
        { headerLabel: '名稱 d1', accessor: 'dateCreated' },
        { headerLabel: '名稱 d2', accessor: 'testNumber' },
      ],
    },
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  spans: any = [];

  constructor() {
    this.cacheSpan('priority', (d: any) => d.priority);
    this.cacheSpan('status', (d: any) => d.status);
    this.cacheSpan('dateCreated', (d: any) => d.dateCreated);
    this.cacheSpan('testNumber', (d: any) => d.testNumber);
    this.cacheSpan('testCurrency', (d: any) => d.testCurrency);
    this.cacheSpan('testTime', (d: any) => d.testTime);
  }

  ngOnInit() {
    this.dataSource.data = DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
    // 遍例所有 mainHeader 的 accessor
    const abb = [...this.columns];
    let displayColsDef: any = [];
    let mainHeaderAccessors = abb.reduce((acc, curr) => {
      acc.push(curr.accessor);
      //如果有 columns
      if (curr.hasOwnProperty('columns')) {
        curr.columns.map((v: any) => {
          displayColsDef.push(v.accessor);
          acc.push(v.accessor);
        });
      } else {
        displayColsDef.push(curr.accessor);
      }
      return acc;
    }, []);

    // 資料更新，確保 console 得到最新的資料
    this.displayColsDef = displayColsDef;
    this.mainHeaderDef = this.columns.map((head: any) => head.header);
    //debug
    console.log({
      columns: this.columns,
      mainHeaderDef: this.mainHeaderDef,
      displayColsDef: displayColsDef, //印出所有的 accessor
      dataSource: this.dataSource,
    });
  }
  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */

  cacheSpan(key: string, accessor: any) {
    for (let i = 0; i < DATA.length; ) {
      let currentValue = accessor(DATA[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < DATA.length; j++) {
        if (currentValue != accessor(DATA[j])) {
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

  getRowSpan(col: string, index: number) {
    return this.spans[index] && this.spans[index][col];
  }
}
