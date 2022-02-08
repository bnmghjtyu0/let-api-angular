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

  group1 = {
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', [Validators.required, NoNegativeNumbers]],
    room: [null, Validators.required],
  };

  register() {
    this.profileForm = this.formBuilder.group(this.group1, {
      validators: [this.roomOver18Validator.onlyAccessRoomsOver18(18)],
      updateOn: 'blur',
    });
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

  ngOnInit(): void {
    this.register();
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.profileForm.controls[control].hasError(error);
  };

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

  onSubmit() {
    // this.profileForm.controls.room.setValue(null);
    console.log(this.profileForm.value);
  }
}
