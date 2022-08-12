import { RoomOver18Validator } from './validator.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Room } from './form';

function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? { negativeNumber: true } : null;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  Object = Object;
  title = 'forms-cross-field-validation';
  profileForm!: FormGroup;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  get profileArrayControls() {
    return (this.profileForm.controls.profileArray as FormArray).controls;
  }

  constructor(
    private fb: FormBuilder,
    private roomOver18Validator: RoomOver18Validator
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group(
      {
        firstName: this.fb.control('', { validators: [Validators.required] }),
        lastName: this.fb.control('', { validators: [Validators.required] }),
        profileArray: this.fb.array([]),
        age: this.fb.control('', {
          validators: [Validators.required, NoNegativeNumbers],
        }),
        room: this.fb.control(null, {
          validators: [Validators.required],
          updateOn: 'change',
        }),
      },
      {
        validators: [this.roomOver18Validator.onlyAccessRoomsOver18(18)],
        updateOn: 'submit',
      }
    );
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.profileForm.controls[control].hasError(error);
  };

  get profileArray() {
    return (this.profileForm.controls.profileArray as FormArray).controls;
  }

  changeSelectArray($event: any, index: number) {
    const currentArray = (
      this.profileForm.controls.profileArray as FormArray
    ).at(index) as FormGroup;

    // room-1 單選(singleCity)
    // room-2 多選(multipleCity)
    // room-3 自定義(customCity)
    if ($event.value.value === 'room-1') {
      currentArray.removeControl('multipleCity');
      currentArray.removeControl('customCity');
      currentArray.addControl(
        `singleCity`,
        this.fb.control('', {
          validators: [Validators.required],
        })
      );
    }
    if ($event.value.value === 'room-2') {
      currentArray.removeControl('singleCity');
      currentArray.removeControl('customCity');
      currentArray.addControl(
        `multipleCity`,
        new FormControl('', Validators.required)
      );
    }
    if ($event.value.value === 'room-3') {
      currentArray.removeControl('singleCity');
      currentArray.removeControl('multipleCity');
      currentArray.addControl(
        `customCity`,
        new FormControl('', Validators.required)
      );
    }
  }
  changeSelect($event: any) {
    if ($event.value.value === 'room-1') {
      this.profileForm.removeControl('firstName2');
      this.profileForm.addControl(
        'firstName',
        new FormControl('', Validators.required)
      );
    }
    if ($event.value.value === 'room-2') {
      this.profileForm.removeControl('firstName');
      this.profileForm.addControl(
        'firstName2',
        new FormControl('', Validators.required)
      );
    }
  }

  /**
   * 新增一個 array
   */
  createProfileArray(): FormGroup {
    return this.fb.group({
      singleCity: this.fb.control('', {
        validators: [Validators.required],
      }),
      omgRoom: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }

  addProfileArray() {
    (this.profileForm.controls.profileArray as FormArray).push(
      this.createProfileArray()
    );
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
