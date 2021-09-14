import { RoomOver18Validator } from './validator.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
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
  title = 'forms-cross-field-validation';
  profileForm!: FormGroup;

  get form() {
    return this.profileForm.controls;
  }

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private roomOver18Validator: RoomOver18Validator
  ) {}

  register() {
    this.profileForm = this.formBuilder.group(
      {
        firstName: [null],
        lastName: [null],
        age: [null],
        room: [null, Validators.required],
      },
      {
        validators: [this.roomOver18Validator.onlyAccessRoomsOver18(18)],
        updateOn: 'blur',
      }
    );
  }

  ngOnInit(): void {
    this.register();
  }

  public addValidators(form: FormGroup, validationArray: any) {
    for (const key in form.controls) {
      form.controls[key].setValidators(validationArray[key]);
      form.controls[key].updateValueAndValidity();
    }
  }
  public removeValidators(form: FormGroup, validationPairs: any) {
    for (const key in form.controls) {
      if (validationPairs.includes(key)) {
        form.controls[key].clearValidators();
        form.controls[key].updateValueAndValidity();
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

  onReset() {
    const { firstName, lastName, age, room } = this.form;
    this.profileForm.reset();

    this.removeValidators(this.profileForm, [
      'firstName',
      'lastName',
      'age',
      'room',
    ]);
  }
  onSearch() {
    console.log('search');
    const { firstName, lastName, age, room } = this.form;
    //dynamic validation
    const validationType: any = {
      firstName: [Validators.required],
    };
    this.addValidators(this.profileForm, validationType);
  }
  onSubmit() {
    this.removeValidators(this.profileForm, ['firstName', 'lastName', 'room']);
    const validationType: any = {
      firstName: [Validators.required],
      lastName: [Validators.required],
      age: [Validators.required],
      room: [Validators.required],
    };
    this.addValidators(this.profileForm, validationType);
    let firstName = this.profileForm.controls.firstName.value;
    let lastName = this.profileForm.controls.lastName.value;
    let age = this.profileForm.controls.age.value;
    let room = this.profileForm.controls.room.value;

    let form = {
      firstName,
      lastName,
      age,
      room,
    };
    console.log(form);
  }
}
