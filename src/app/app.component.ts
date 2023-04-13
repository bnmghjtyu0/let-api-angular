import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';

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
  profileForm = this.fbTypeSafe.group<ProfileFormModel>({
    firstName: this.fb.control(''),
    lastName: this.fb.control(''),
    address: this.fb.group({
      street: [0],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private fbTypeSafe: FormBuilderTypeSafe
  ) {}

  updateProfile() {
    this.aliases.push(this.makeAliase('666'));
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: 123,
      },
    });
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
