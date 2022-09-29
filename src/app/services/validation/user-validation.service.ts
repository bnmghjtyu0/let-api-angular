import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ErrorMessage } from './common-validation.service';

/**
 * 自定義驗證器 mapping 錯誤訊息
 */
export const userErrorMessages: ErrorMessage = (
  validatorName,
  validatorValue?
) => {
  return {
    //姓名
    lastNameRequire: '請輸入姓名',
    //姓名 Api錯誤訊息
    lastNameApiError: validatorValue,
  };
};

@Injectable({
  providedIn: 'root',
})
export class UserValidationService {
  static lastNameValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { lastNameRequire: true };
    }
    return null;
  }
}
