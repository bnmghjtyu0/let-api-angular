import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

function profileFormValidator() {
  return (formGroup: FormGroup) => {
    let favoriteSportControl = formGroup.controls['favoriteSport'];

    if (
      favoriteSportControl.errors &&
      !favoriteSportControl.errors.minimumOne
    ) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    if (favoriteSportControl.value.length === 0) {
      favoriteSportControl.setErrors({ minimumOne: true });
    } else {
      favoriteSportControl.setErrors(null);
    }
  };
}

function passwordMatchValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  submitted: boolean = false;
  countryList: { id: number; name: string }[] = [
    { id: 1, name: '無' },
    { id: 2, name: '身分證' },
  ];

  favoriteSportList = [
    { name: '羅嘉翎', value: 'people1', id: 1, group: 'A' },
    { name: '戴資穎', value: 'people2', id: 2, group: 'A' },
  ];

  favoriteSportChecked: string[] = [];
  profileForm!: FormGroup;
  registerForm() {
    this.profileForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            // Validators.pattern(/.+@.+\..+/),
            Validators.minLength(5),
          ],
        ],
        nickName: ['', [Validators.required]],
        sex: ['girl', [Validators.required]],
        favoriteSport: this.fb.array([]),
        country: [1, [Validators.required]],
        county: [''],
        passwordGroup: this.fb.group(
          {
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required]],
          },
          { validator: passwordMatchValidator('password', 'passwordConfirm') }
        ),
      },
      { validator: profileFormValidator() }
    );
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

  get form() {
    return this.profileForm.controls;
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
  get favoriteSport() {
    return this.profileForm.controls['favoriteSport'];
  }

  get password() {
    return this.profileForm.controls.passwordGroup.get('password');
  }
  get passwordConfirm() {
    return this.profileForm.controls.passwordGroup.get('passwordConfirm');
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.favoriteSport as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxAllChange(e: any) {}
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
    //submitted = false 不顯示錯誤訊息
    this.submitted = false;
    this.profileForm.reset();
  }

  onSubmit() {
    //submitted = true 顯示錯誤訊息
    this.submitted = true;
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.status);
    console.warn(this.profileForm.value);

    if (this.profileForm.valid) {
      alert(`成功 ${JSON.stringify(this.profileForm.value, null, 2)}`);
    }
  }
}
