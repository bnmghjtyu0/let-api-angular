export interface Data {
  priority: string;
  status: string;
  dateCreated: string;
  testNumber: number;
  testCurrency: number;
  testTime: string;
}

export interface Column {
  type?: 'radio';
  header: string;
  headerLabel: string;
  accessor?: keyof Data;
  rowspan: number;
  colspan: number;
  render?: () => any;
  columns?: Array<{ headerLabel: string; accessor: string }>;
}
