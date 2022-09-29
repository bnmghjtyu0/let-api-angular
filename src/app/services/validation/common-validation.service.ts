import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, ValidatorFn } from '@angular/forms';
import { userErrorMessages } from './user-validation.service';

/** 表單錯誤訊息 */
export type ErrorMessage = (
  validatorName: string,
  validatorValue?: any
) => Readonly<{ [key: string]: any }>;

/** Reactive Forms 共用服務 */
@Injectable({
  providedIn: 'root',
})
export class CommonValidationService {
  /**
   * 取得表單的錯誤訊息
   * @param validatorName - 驗證欄位的名稱
   * @param validatorValue - 驗證欄位回傳值
   * @returns 錯誤訊息
   */
  getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    const config: any = {
      ...userErrorMessages(validatorName, validatorValue),
    };
    return config[validatorName];
  }

  /**
   * 加入驗證
   * @param control - 表單控制元件
   */
  addValidators(control: AbstractControl, validators: ValidatorFn | ValidatorFn[]): void {
    control.addValidators(validators);
    control.updateValueAndValidity();
  }
  /**
   * 移除驗證
   * @param control - 表單控制元件
   */
  removeValidators(control: AbstractControl): void {
    control.removeValidators([]);
    control.updateValueAndValidity();
  }

  /** 驗證失敗 */
  isInvalid(control: AbstractControl, formRef: FormGroupDirective): boolean {
    return control.invalid && (control.touched || formRef.submitted);
  }
}
