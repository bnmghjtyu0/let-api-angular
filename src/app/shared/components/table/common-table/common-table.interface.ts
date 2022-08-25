export interface Column {
  header: string;
  accessor?: string;
  cell?: (data: any) => string | number | Date;
}
