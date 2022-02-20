import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  // 定義傳入的資料
  username: string = '';

  constructor() {}

  // 用來接收 registerOnChange 和 onTouched 傳入的方法
  onChange = (_: any) => {};
  onTouched = () => {};

  // ControlValueAccessor interface 的方法
  writeValue(value: any): void {
    this.username = value || '';
  }
  // ControlValueAccessor interface 的方法
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }
  // ControlValueAccessor interface 的方法
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  // ControlValueAccessor interface 的方法
  setDisabledState(isDisabled: boolean): void {}

  //寫入資料
  pushChanges($event: any) {
    this.onChange($event.target.value);
  }
}
