import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { BaseFormInterface } from 'src/app/shared/base-form/base-form.interface';

const errorMessageSource = {
  _account: '帳號',
  account: [
    {
      type: 'required',
      message: '請輸入身分證或新居留證號',
    },
    {
      type: 'invalid',
      message: '請輸入正確的身分證或新居留證號',
    },
  ],
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  /** 唯讀表單 */
  readonly FORM_FIELD = {
    /** 帳號 */
    account: 'account',
  };
  /** 表單欄位驗證跳出訊息 */
  validation_messages = {
    [this.FORM_FIELD.account]: errorMessageSource.account,
  };

  submitErrorMsg = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  /**
   * 初始化表單
   * @returns 無回傳值
   */
  initForm(): void {
    this.form = this.fb.group({
      account: ['', { validators: Validators.required, updateOn: 'submit' }],
    });
  }
  save(formRef: FormGroupDirective, $event: Event): void {
    formRef.onSubmit($event);
    console.log(this.form.value);
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
  triggerSubmit(): void {}
}
