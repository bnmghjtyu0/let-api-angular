// 參考 material table https://github.com/mbrn/material-table/blob/master/types/index.d.ts
export interface Data {
  priority: string;
  status: string;
  dateCreated: string;
  testNumber: number;
  testCurrency: number;
  testTime: string;
}

export interface Column {
  type?: 'radio' | string;
  header: string;
  headerLabel: string;
  accessor: keyof Data | string;
  rowspan: number;
  colspan: number;
  render?: (data: Data) => any;
  columns?: Array<{ headerLabel: string; accessor: string }>;
}
