export interface ViewContext<T> {
  $implicit: T;
}
export type Column = {
  type?: 'link' | 'radio' | 'checkbox' | 'dragdrop';
  header: string;
  headerLabel: string;
  accessor: string;
  rowspan: number;
  colspan: number;
  render?: (data: any) => void;
  columns?: {
    headerLabel: string;
    accessor: string;
  }[];
};
export type Datas = Record<string, any>;
