import { mockDatas } from '../mock/datas';
import { Data } from '../model/r-table';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'r-table-demo-radio',
  templateUrl: './r-table-demo-radio.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RTableDemoRadioComponent {
  chosenItem: any;
  public selection!: any;
  column = [
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
  datas: Data[] = [];
  get columns() {
    return this.column;
  }
  constructor() {}

  delete(e: Event, data: any) {
    // console.log(data);
  }

  //取得初始資料
  onRadioChecked(data: any, i: number) {
    if (i === 0) {
      this.selection = this.datas[i];
    }
    return i === 0;
  }
  updateDatas(): void {
    this.datas = mockDatas;
  }
}
