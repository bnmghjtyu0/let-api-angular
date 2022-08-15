import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalValidationService {
  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      required: '請輸',
    };
    return config[validatorName];
  }
  static createGlobalValidation(control: any) {
    if (!control.value) {
      return { required: true };
    }
    return null;
  }
}
