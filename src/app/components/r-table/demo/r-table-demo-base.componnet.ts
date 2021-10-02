import { Data } from './../model/r-table';
import { Component } from '@angular/core';

@Component({
  selector: 'r-table-demo-base',
  templateUrl: './r-table-demo-base.component.html',
  styles: [``],
})
export class RTableDemoBaseComponent {
  columns = [
    {
      type: 'radio',
      header: 'radio-g',
      headerLabel: '名稱 radio',
      accessor: 'radio',
      rowspan: 2,
      colspan: 1,
      render: (data: Data) => {
        return 123;
      },
    },
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

  constructor() {}

  delete(e: Event, data: any) {
    console.log(data);
  }
}
