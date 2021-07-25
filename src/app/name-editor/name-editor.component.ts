import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  countryList: { id: number; name: string }[] = [
    { id: 1, name: '無' },
    { id: 2, name: '身分證' },
  ];
  profileForm!: FormGroup;
  registerForm() {
    this.profileForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          // Validators.pattern(/.+@.+\..+/),
          Validators.minLength(5),
        ],
      ],
      nickName: [''],
      country: [1, [Validators.required]],
      county: [''],
      passwordGroup: this.fb.group(
        {
          password: ['', Validators.required],
          passwordConfirm: [''],
        },
        { validator: this.passwordMatchValidator }
      ),
    });
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm();

    // 監聽
    this.profileForm.controls['userName'].valueChanges.subscribe((x) => {
      console.log('userName value changed');
      console.log(x);
    });
  }
  get userName() {
    return this.profileForm.controls['userName'];
  }
  get country() {
    return this.profileForm.controls['country'];
  }
  get county() {
    return this.profileForm.controls['county'];
  }
  get password() {
    return this.profileForm.controls.passwordGroup.get('password')
  }
  get passwordConfirm() {
    return this.profileForm.controls.passwordGroup.get('passwordConfirm')
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value ===
      frm.controls['passwordConfirm'].value
      ? null
      : { mismatch: true };
  }
  onCountryChange() {
    let countrySelected = this.country.value;
    if (countrySelected === 2) {
      this.county.setValidators([Validators.required]);
      this.county.updateValueAndValidity();
    } else {
      this.county.clearValidators();
      this.county.updateValueAndValidity();
    }
  }
  updateProfile() {
    this.profileForm.patchValue({
      userName: 'richard',
      nickName: 'richard',
    });
  }

  resetFrom() {
    this.profileForm.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.status);
    console.warn(this.profileForm.value);
    if (this.profileForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.profileForm); //{7}
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.controls[field]; //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }
}
