import { NgControl, AbstractControl } from '@angular/forms';
import { Component, HostListener, Input, Optional, Self } from '@angular/core';

/** Reusable Angular Material FormField */
@Component({
  selector: 'app-last-name-input',
  templateUrl: './last-name-input.component.html',
  styleUrls: ['./last-name-input.component.scss'],
})
export class LastNameInputComponent {
  /** 輸入時清空錯誤訊息 */
  @HostListener('input', ['$event']) onInput(): void {
    //輸入時，隱藏錯誤訊息
    this.ngControl?.control?.setErrors(null);
  }

  //input 初始值
  value = '';

  /** 用來接收 registerOnChange 和 onTouched 傳入的方法 */
  onChange: (value: any) => any = () => ({});
  onTouched: () => any = () => {};

  @Input() control!: AbstractControl;
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      // 提供 Accessor 取代使用 providers 載入 ControlValueAccessor
      this.ngControl.valueAccessor = this;
    }
  }

  /** ControlValueAccessor 需實做的方法 */
  writeValue(value: string): void {
    this.value = value;
  }

  /** ControlValueAccessor 需實做的方法 */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** ControlValueAccessor 需實做的方法 */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** 更新 input value */
  setInputValue($event: Event): void {
    const inputValue = ($event.target as HTMLInputElement).value;
    this.onChange(inputValue);
  }
}
