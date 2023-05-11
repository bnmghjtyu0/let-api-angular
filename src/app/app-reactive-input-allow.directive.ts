import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * 只允許某些文字輸入
 *
 * @example
 *   ```html
 *    <input appReactiveInputAllow="^[0-9a-zA-Z]*$" />
 *   ```;
 */
@Directive({
  selector: '[appReactiveInputAllow]',
})
export class ReactiveInputAllowDirective {
  /** 符合正規才能輸入 */
  @Input() appReactiveInputAllow: string | null = '';
  /** 只允許某些文字輸入 - 建構子 */
  constructor(private control: NgControl) {}

  /**
   * HostListener - 監聽 input 輸入時
   *
   * @returns 無回傳值
   */
  @HostListener('input', ['$event']) onInput(event: any) {
    const regExp = new RegExp(this.appReactiveInputAllow as string);
    // 建立正規表達式
    const test = regExp.test(event.target.value);

    /** 防止 firebox 輸入中文  */
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(
      this.appReactiveInputAllow as string,
      ''
    );

    if (inputValue !== event.target.value) {
      event.stopPropagation();
    }
    /** 防止 firebox 輸入中文 */

    //如果符合，才能輸入並且更新表單資料
    if (test) {
      event.target.defaultValue = event.target.value;
    }
    //如果不符合，不會更新表單資料
    else {
      this.control.control?.setValue(event.target.defaultValue);
    }
  }
}
