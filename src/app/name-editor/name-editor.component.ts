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
    { id: 1, name: 'Los Angeles' },
    { id: 2, name: 'San Francisco' },
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
      country: [1, Validators.required],
      county: [''],
      passwordGroup: this.fb.group(
        {
          password: [''],
          passwordConfirm: [''],
        },
        { validator: this.passwordMatchValidator }
      ),
    });
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm();
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
      // password: {
      //   password: '123 Drew Street',
      // },
    });
  }

  resetFrom() {
    this.profileForm.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.status);
    console.warn(this.profileForm.value);
  }
}
