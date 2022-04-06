import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
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
export class HomeComponent
  extends BaseFormComponent
  implements BaseFormInterface, OnInit
{
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

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }
  /**
   * 初始化表單
   * @returns 無回傳值
   */
  initForm(): void {
    this.form = new FormGroup(
      {
        [this.FORM_FIELD.account]: new FormControl('', {}),
      },
      {
        updateOn: 'submit',
      }
    );
  }
  save(formRef: FormGroupDirective): void {
    // formRef.submitted = true;
    formRef.ngSubmit.emit();
    console.log(this.form.value);
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
