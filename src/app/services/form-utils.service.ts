import { Injectable } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  isInvalid(form: FormGroupDirective) {
    return form.invalid && (form.touched || form.submitted);
  }
}
