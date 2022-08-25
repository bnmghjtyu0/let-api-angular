import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonTableDirective } from 'src/app/directives/common-table.directive';
import { Column } from './common-table.interface';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
  //暫時用不到
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  @Input() data: any[] | null = [];
  @Input() columns: Column[] = [];

  /**
   * 取得從元件外部傳入的資料
   * @param column - 定義表格欄位
   * @param data - 每個表格欄位的資料
   * @param dataIndex - 索引
   * @returns 回傳從元件外部傳入的資料
   */
  getTableViewContext(column: any, data: any, dataIndex: number): any {
    // { $implicit: 'World', td: 't123', th: 'th123' }
    return { $implicit: { column, data, dataIndex } };
  }
}
