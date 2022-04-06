import { FormGroup } from '@angular/forms';

/**
 * 表單基本格式
 */
export interface BaseFormInterface {
  /**用於追蹤一個表單控制元件組的值和狀態 */
  form: FormGroup;

  /** 表單欄位 */
  readonly FORM_FIELD: { [key: string]: string };

  /** 欄位檢核錯誤訊息設定 */
  validation_messages: {
    [x: string]: {
      type: string;
      message: string;
    }[];
  };

  /** 表單送出錯誤訊息 */
  submitErrorMsg: string;

  /**
   * 初始化表單
   * @returns 無回傳值
   */
  initForm(): void;

  /**
   * 送出表單
   * @returns 無回傳值
   */
  onSubmit(): void;
}
