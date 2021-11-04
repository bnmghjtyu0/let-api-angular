import { ValidatorFn, AbstractControl } from '@angular/forms';
// import { Moment } from 'moment';

export function datePickerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (control.value) {
      const moment = control.value;
      // if (moment.year() > 2000 ) {
      //   forbidden = false;
      // }
    }
    return forbidden ? { 'invalidDOBYear': true } : null;
  };
}
