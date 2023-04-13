import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';


type ProfileFormModel = {
  firstName?: string;
  lastName?: string;
  address?: {
    street?: number;
    city?: string;
    state?: string;
    zip?: string;
  };
  aliases?: { id: number }[];
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [0],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  })



  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    const value: ProfileFormModel = {
      firstName: 'Nancy',
      address: {
        street: 123,
      },
    };

    this.aliases.push(this.makeAliase('666'));

    this.profileForm.patchValue(value);
  }

  makeAliase(id: string) {
    return this.fb.group({
      id: this.fb.control(id),
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
