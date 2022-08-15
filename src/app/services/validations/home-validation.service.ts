import { Injectable, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HomeValidationService {
  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: { [key: string]: string } = {
      required: '請輸入帳號',
    };
    return config[validatorName];
  }
  static account(control: AbstractControl) {
    if (!control.value) {
      return { required: true };
    }
    return null;
  }
}
