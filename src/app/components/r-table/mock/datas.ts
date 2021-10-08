import { Column } from './../model/r-table';
import { Datas } from '../model/r-table';

export const columns: Column[] = [
  {
    type: 'radio',
    header: 'radio-g',
    headerLabel: '名稱 radio',
    accessor: 'radio',
    rowspan: 2,
    colspan: 1,
    render: () => {},
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
export const mockDatas: Datas= [
  {
    priority: 'P1',
    status: 'Undefined P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Undefined P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Undefined P1',
    dateCreated: '11/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Undefined P1',
    dateCreated: '11/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Open P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Open P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Open P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'Open P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'New P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P1',
    status: 'New P1',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Undefined P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Undefined P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Undefined P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Undefined P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Open P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Open P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Open P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'Open P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'New P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
  {
    priority: 'P2',
    status: 'New P2',
    dateCreated: '12/12/12',
    testNumber: 545,
    testCurrency: 45,
    testTime: '12:45',
  },
];
