import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * 客製化 mat-icon 服務
 * @example
 * ```
 * <mat-icon matSuffix svgIcon="custom:chevron-down"></mat-icon>
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SharedMaterialService {
  /** 共用 material 元件 - 建構子 */
  constructor(
    /** matIconRegistry:內部調用註冊和顯示供 <mat-icon> 元件使用的圖示 */
    private matIconRegistry: MatIconRegistry,
    /** domSanitizer:內部調用防範跨站指令碼攻擊（XSS）類別的安全問題 */
    private domSanitizer: DomSanitizer
  ) {}
  /**
   * 初始化元件
   * @returns 無回傳值
   */
  init(): void {
    this.initMatCustomIcon();
  }

  /**
   * 初始化 custom mat icon
   * @returns 無回傳值
   */
  private initMatCustomIcon(): void {
    this.addCustomMatIcon('error', 'error');
    this.addCustomMatIcon('visibility-off', 'eyeb');
    this.addCustomMatIcon('visibility', 'eye');
    this.addCustomMatIcon('chevron-up', 'chevron-up');
    this.addCustomMatIcon('chevron-down', 'chevron-down');
    this.addCustomMatIcon('member-icon1', 'member-icon1');
    this.addCustomMatIcon('member-icon2', 'member-icon2');
    this.addCustomMatIcon('member-icon3', 'member-icon3');
    this.addCustomMatIcon('member-icon4', 'member-icon4');
    this.addCustomMatIcon('member-icon5', 'member-icon5');
    this.addCustomMatIcon('member-icon6', 'member-icon6');
    this.addCustomMatIcon('member-icon7', 'member-icon7');
  }

  /**
   * 新增自訂 icon
   * @sealed
   * @param  iconName - 自定義名稱
   * @param  iconFileName - 檔案名稱
   * @returns 無回傳值
   * @example
   * ```html
   * <mat-icon svgIcon="custom:chevron-down"></mat-icon>
   * ```
   */
  private addCustomMatIcon(iconName: string, iconFileName: string): void {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom',
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/images/${iconFileName}.svg`
      )
    );
  }
}
