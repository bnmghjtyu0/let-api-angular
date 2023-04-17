import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatPaginator,
  MatPaginatorDefaultOptions,
  MatPaginatorIntl,
  MAT_PAGINATOR_DEFAULT_OPTIONS,
  PageEvent,
} from '@angular/material/paginator';
import isNumber from 'lodash-es/isNumber';
import isString from 'lodash-es/isString';
import { Pages } from './custom-paginator.model';
import { HttpClient } from '@angular/common/http';

/** 客製化表格分頁功能 (MatPaginator) */
@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CustomPaginatorComponent extends MatPaginator {
  /** Lodash 是否為數字 */
  isNumber = isNumber;
  /** Lodash 是否為字串 */
  isString = isString;
  /** 分頁中間數字相鄰的數字數量 */
  pageNeighbor = 2;
  /** 左邊的 ... */
  LEFT_PAGE = 'LEFT';
  /** 右邊的 ... */
  RIGHT_PAGE = 'RIGHT';

  /** your data array */
  @Input() data: any[] = [];
  /** current page number */
  @Input() currentPage = 0;
  /**  total row number */
  @Input() totalCount = 0;


  /** 客製化表格分頁功能-建構子 */
  constructor(
    /** Material 修改分頁標籤及文本服務 */
    intl: MatPaginatorIntl,
    /** Angular 提供的變更檢測服務 */
    changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    /** Material 分頁功能提供的設定物件 */
    @Optional()
    @Inject(MAT_PAGINATOR_DEFAULT_OPTIONS)
    defaults?: MatPaginatorDefaultOptions
  ) {
    super(intl, changeDetectorRef, defaults);
  }

  /**
   * 設定目前的分頁位置
   *
   * @param page - 第幾頁
   * @returns 無回傳值
   */
  public setPage(page: number): void {
    const previousPageIndex = this.pageIndex;
    //目前的分頁數字位置
    this.pageIndex = page;
    this.handlePageEvent(previousPageIndex);
  }

  /**
   * 取得分頁頁碼
   *
   * @returns 分頁的數字
   */
  public getPageNumbers(): Pages {
    /** 表格資料長度 */
    const tableDataLength = this.data.length;
    //當表格沒資料、分頁只有 1 頁，回傳 1
    if (tableDataLength === 0 || this.getNumberOfPages() === 1) return [1];
    /** 總長度 */
    const totalPages = this.totalCount;
    /** 分頁中間要顯示幾個數字 */
    const pageNeighbor = this.pageNeighbor;
    /** 全部分頁數字 , 中間相鄰的數字 * 2 + 中間的數字 + 第一頁的數字 + 最後一頁的數字 */
    const totalNumbers = this.pageNeighbor * 2 + 1 + 1 + 1;
    /** 全部分頁區塊 */
    const totalBlocks = totalNumbers + 2;

    // 判斷分頁列表頁碼顯示邏輯
    if (totalPages > totalBlocks) {
      /** 起始頁碼 */
      const startPage = Math.max(2, this.currentPage - pageNeighbor);
      /** 最後頁碼 */
      const endPage = Math.min(totalPages - 1, this.currentPage + pageNeighbor);
      /** 全部的頁碼 */
      let pages = this.range(startPage, endPage);

      /** HasLeftSpill: 有分頁左邊的 ... */
      const hasLeftSpill = startPage > 2;
      /** HasRightSpill: 有分頁右邊的 ... */
      const hasRightSpill = totalPages - endPage > 1;
      /** SpillOffset: 左邊或右邊有 ... 時的分頁數字 */
      const spillOffset = totalNumbers - (pages.length + 1);

      // 分頁兩邊都有 ... 時
      if (hasLeftSpill && hasRightSpill) {
        pages = [this.LEFT_PAGE, ...pages, this.RIGHT_PAGE];
      }
      // 只有分頁左邊有 ... 時
      if (hasLeftSpill && !hasRightSpill) {
        /** 額外頁數 */
        const extraPages = this.range(startPage - spillOffset, startPage - 1);
        pages = [this.LEFT_PAGE, ...extraPages, ...pages];
      }
      // 只有分頁右邊有 ... 時
      if (!hasLeftSpill && hasRightSpill) {
        /** 額外頁數 */
        const extraPages = this.range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, this.RIGHT_PAGE];
      }
      return [1, ...pages, totalPages];
    }

    return this.range(1, totalPages);
  }

  /**
   * 使用 MatPaginator 內的 PageEvent
   *
   * @param previousPageIndex - 上一頁分頁索引
   * @returns 無回傳值
   */
  private handlePageEvent(previousPageIndex: number): void {
    /** Material paginator 事件 */
    const matPageEvent: EventEmitter<PageEvent> = this.page;
    matPageEvent.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.data.length,
    });
  }
  /**
   * 建立數字陣列
   *
   * @example
   *   range(1, 5) => [1, 2, 3, 4, 5]
   *
   * @param from - 第一個數字
   * @param to - 最後一個數字
   * @returns 數字陣列 [1, 2, 3, 4, 5]
   */
  private range(from: number, to: number): Pages {
    return [...Array(to - from + 1)].map((_, i) => i + from);
  }
}
