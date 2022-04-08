import {
  NgxMatDateAdapter,
  NGX_MAT_DATE_FORMATS,
} from '@angular-material-components/datetime-picker';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

const INTL_DATE_INPUT_FORMAT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hourCycle: 'h23',
  hour: '2-digit',
  minute: '2-digit',
};

/**
 * 日期+時間選擇器
 * 初始值需要從外部的 formControl 傳入
 * @example
 * <app-datetime-range-picker formControlName="dateTimePicker"></app-datetime-range-picker>
 *  dateTimePicker: {
 *   startDate: [new Date(2022, 0, 1, 0, 0, 0)],
 *   endDate: [new Date(2022, 11, 31, 23, 59, 59)],
 *  },
 */
@Component({
  selector: 'app-datetime-range-picker',
  templateUrl: './datetime-range-picker.component.html',
  styleUrls: ['./datetime-range-picker.component.scss'],
  providers: [
    {
      provide: NGX_MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: INTL_DATE_INPUT_FORMAT,
        },
        display: {
          dateInput: INTL_DATE_INPUT_FORMAT,
          monthYearLabel: { year: 'numeric', month: 'numeric' },
        },
      },
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimeRangePickerComponent),
      multi: true,
    },
  ],
})
export class DatetimeRangePickerComponent implements ControlValueAccessor {
  /**設定主題顏色 */
  public color: ThemePalette = 'primary';
  /** 開始日期 */
  startDate = '';
  /** 結束日期 */
  endDate = '';

  /** 日期區間元件 - 建構子 */

  constructor(private adapter: NgxMatDateAdapter<Date>) {
    this.adapter.setLocale('zh-TW');
  }

  // registerOnChange 和 onTouched 傳入的方法
  onChange = (_: any) => {};

  /**
   * {@inheritDoc ControlValueAccessor.writeValue}
   * @returns 無回傳值
   */
  writeValue(value: any): void {
    this.startDate = value.startDate[0];
    this.endDate = value.endDate[0];
  }

  /**
   * {@inheritDoc ControlValueAccessor.registerOnChange}
   * @param  fn - 要註冊的回呼(Callback)函式
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * {@inheritDoc ControlValueAccessor.registerOnTouched}
   * @param  onTouched - 要註冊的回呼(Callback)函式。
   */
  registerOnTouched(): void {}

  /** 異動日期
   * @param type - 開始日期(startDate)或結束日期(endDate)
   * @param value - 選擇的日期
   */
  changeDate(type: string, value: string): void {
    if (type === 'startDate') {
      this.startDate = value;
    } else {
      this.endDate = value;
    }
    this.onChange({ startDate: this.startDate, endDate: this.endDate });
  }

  /**
   * 點擊日曆的 icon
   * @returns 無回傳值
   */
  handleDateIcon(): void {
    this.updateCalendar();
  }

  /**
   * 移除日期內的中文字 "日"
   * @returns 無回傳值
   */
  updateCalendar(): void {
    setTimeout(() => {
      const cells = Array.from(
        document.querySelectorAll<HTMLDivElement>(
          '.mat-calendar .mat-calendar-body-cell-content'
        )
      );
      cells.forEach((c) => {
        c.innerText = c.innerText.length == 1 ? '0' + c.innerText : c.innerText;
        //移除中文字。因為使用 this.adapter.setLocale('zh-TW'); 所以預設會出現 1日、2日。
        c.innerHTML = c.innerText.replace(/\W/, '');
      });
    });
  }
}
