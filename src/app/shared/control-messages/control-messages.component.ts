import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CommonValidationService } from 'src/app/services/validation/common-validation.service';

/** Reactive Forms 表單錯誤訊息元件 */
@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss'],
})
export class ControlMessagesComponent {
  /** 表單控制元件 */
  @Input() control!: AbstractControl;

  /** 表單錯誤訊息元件建構子 */
  constructor(
    /** Reactive Forms 共用服務 */
    private commonValidationService: CommonValidationService
  ) {}

  /** 取得錯誤訊息 */
  get errorMessage(): string | null {
    for (const propertyName in this.control.errors) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.control.errors,
          propertyName
        ) &&
        this.control.touched
      ) {
        return this.commonValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}
