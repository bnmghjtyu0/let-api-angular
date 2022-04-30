import { AbstractControl, FormGroup } from '@angular/forms';

export interface ProfileFormValue {
  firstName: string;
  lastName: string;
  age: number;
  room: string;
  date: string;
  sex: any;
  dateTimePicker: {
    startDate: string;
    endDate: string;
  };
  address: AddressFormGroup;
}

export interface AddressFormValue {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface AddressFormGroup extends FormGroup {
  value: AddressFormValue;
  controls: {
    street: AbstractControl;
    city: AbstractControl;
    state: AbstractControl;
    zip: AbstractControl;
  };
}

export interface ProfileFormGroup extends FormGroup {
  value: ProfileFormValue;
  controls: {
    [key in keyof ProfileFormValue]: AbstractControl;
  };
}
