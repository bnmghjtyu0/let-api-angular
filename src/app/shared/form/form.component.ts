import { RoomOver18Validator } from './validator.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormArray,
} from '@angular/forms';
import { Room } from './form';
import { datePickerValidator } from './datepicker-validator';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import commonConstant from 'src/app/constants/common';
import { ProfileFormGroup } from 'src/app/models/form';
import { UserValidationService } from 'src/app/services/validation/user-validation.service';
function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? { negativeNumber: true } : null;
}

// material ui 監聽 Reactive Form
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  title = 'forms-cross-field-validation';
  profileForm!: ProfileFormGroup;
  matcher = new MyErrorStateMatcher();

  get form() {
    return this.profileForm.controls;
  }

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  sexInit = ['男生'];
  sex = [
    { id: 1, text: '男生' },
    { id: 2, text: '女生' },
  ];

  constructor(
    private fb: FormBuilder,
    private roomOver18Validator: RoomOver18Validator
  ) {
    this.registerForm();
  }

  /**
   * 註冊表單
   */
  registerForm() {
    this.profileForm = this.fb.group(
      {
        firstName: [null],
        lastName: this.fb.control('', {
          validators: [UserValidationService.lastNameValidator],
        }),
        age: [null],
        room: [null, Validators.required],
        date: [null, [Validators.required, datePickerValidator()]],
        dateTimePicker: {
          startDate: [commonConstant.startDate],
          endDate: [commonConstant.endDate],
        },
        // 範例：new FormArray[new FormControl('男生'), new FormControl('女生')]
        sex: new FormArray([]),
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: [''],
        }),
      },
      {
        validators: [this.roomOver18Validator.onlyAccessRoomsOver18(18)],
        updateOn: 'submit',
      }
    ) as ProfileFormGroup;
  }

  ngOnInit(): void {
    //更新表單的值 checkbox 預設值
    let langArr = <FormArray>this.profileForm.controls['sex'];
    this.sexInit.forEach((val) => {
      langArr.push(new FormControl(val));
    });

    // 監聽 checkbox 資料變化
    this.profileForm.controls['sex'].valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  public getValues(form: FormGroup, validationArray: any) {
    for (const key in form.controls) {
      form.controls[key].setValidators(validationArray[key]);
      form.controls[key].updateValueAndValidity();
    }
  }

  onReset(formRef: FormGroupDirective) {
    this.profileForm.reset(formRef);
  }
  onSearch() {
    console.log('search');
  }
  onResetValidator() {
    console.log('resetValidator');
    this.profileForm.controls['age'].clearValidators();
    this.profileForm.controls['age'].updateValueAndValidity();
  }

  /**
   * 變更 checkbox
   */
  onCheckChange($event: MatCheckboxChange, item: any) {
    const sexArray = this.profileForm.controls['sex'] as FormArray;
    if ($event.checked) {
      sexArray.push(new FormControl($event.source.value));
    } else {
      let i = 0;
      sexArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == $event.source.value) {
          sexArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onSubmit() {
    this.profileForm.markAllAsTouched();
    console.log(this.profileForm);
    // 驗證
    if (!this.profileForm.valid) {
      console.log('驗證失敗');
    }
  }
}
