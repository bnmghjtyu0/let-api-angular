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
  profileForm!: FormGroup;
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
  ) {}

  register() {
    this.profileForm = this.fb.group(
      {
        firstName: [null],
        lastName: [null],
        age: [null],
        room: [null, Validators.required],
        date: [null, [Validators.required, datePickerValidator()]],
        //範例：new FormArray[new FormControl('男生'), new FormControl('女生')]
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
        updateOn: 'blur',
      }
    );
  }

  ngOnInit(): void {
    this.register();

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

  public addValidatorsNested(form: FormGroup, validationArray: any) {
    for (const key in form.controls) {
      //第一層 group
      if (!Object.keys(form.controls[key]).includes('controls')) {
        form.controls[key].setValidators(validationArray[key]);
        form.controls[key].updateValueAndValidity();
        continue;
      }
      // 第二層 group
      for (const key2 in (form.controls[key] as FormGroup).controls) {
        (form.controls[key] as FormGroup).controls[key2].setValidators(
          validationArray[key2]
        );
        (form.controls[key] as FormGroup).controls[
          key2
        ].updateValueAndValidity();
      }
    }
  }
  // public addValidators(form: FormGroup, validationArray: any) {
  //   for (const key in form.controls) {
  //     form.controls[key].setValidators(validationArray[key]);
  //     form.controls[key].updateValueAndValidity();
  //   }
  // }
  public removeValidators(form: FormGroup, validationPairs: any) {
    //第一層 group
    for (const key in form.controls) {
      if (!Object.keys(form.controls[key]).includes('controls')) {
        if (validationPairs.includes(key)) {
          form.controls[key].clearValidators();
          form.controls[key].updateValueAndValidity();
        }
      }
      // 第二層 group
      for (const key2 in (form.controls[key] as FormGroup).controls) {
        if (validationPairs.includes(key2)) {
          (form.controls[key] as FormGroup).controls[key2].clearValidators();
          (form.controls[key] as FormGroup).controls[
            key2
          ].updateValueAndValidity();
        }
      }
    }
  }

  public getValues(form: FormGroup, validationArray: any) {
    for (const key in form.controls) {
      form.controls[key].setValidators(validationArray[key]);
      form.controls[key].updateValueAndValidity();
    }
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.profileForm.controls[control].hasError(error);
  };

  public errorHandlingNested = (control: string, error: string) => {
    return (this.profileForm.controls['address'] as FormGroup).controls[
      control
    ].hasError(error);
  };

  onReset() {
    const { firstName, lastName, age, room } = this.form;
    this.profileForm.reset();

    this.removeValidators(this.profileForm, [
      'firstName',
      'lastName',
      'age',
      'room',
      'date',
      'street',
      'city',
      'state',
      'zip',
    ]);
  }
  onSearch() {
    console.log('search');
    const { firstName, lastName, age, room } = this.form;
    //dynamic validation
    const validationType: any = {
      firstName: [Validators.required],
    };
    this.addValidatorsNested(this.profileForm, validationType);
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
    console.log(this.profileForm)
    let { firstName, lastName, age, room } = this.profileForm.controls;
    //移除全部的驗證規則
    this.removeValidators(this.profileForm, ['firstName', 'lastName', 'room']);
    const validationType: any = {
      firstName: [Validators.required],
      lastName: [Validators.required],
      age: [Validators.required],
      room: [Validators.required],
      date: [Validators.required, datePickerValidator()],
      street: [Validators.required],
      city: [Validators.required],
      state: [Validators.required],
      zip: [Validators.required],
    };
    //加入新的驗證規則
    this.addValidatorsNested(this.profileForm, validationType);

    // 驗證
    if (!this.profileForm.valid) {
      console.log('驗證失敗');
    }
  }
}
