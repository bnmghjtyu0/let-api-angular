import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent {
  /**用於追蹤一個表單控制元件組的值和狀態 */
  form: FormGroup = new FormGroup({});

  /** 表單共用底層 - 建構子 */
  constructor() {}

  /**
   * 是否顯示表單的錯誤訊息
   * @param formControlName - 表單欄位名稱
   * @returns 是否顯示表單的錯誤訊息
   */
  isShowError(formControlName: string): boolean {
    return !!(
      this.form.get(formControlName)?.invalid &&
      this.form.get(formControlName)?.touched
    );
  }

  /**
   * 檢查表單是否有錯誤
   * @returns 表單是否有錯誤
   */
  validateForm(): boolean {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return false;
    }
    return true;
  }
}
