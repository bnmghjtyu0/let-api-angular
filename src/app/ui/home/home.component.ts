import { HomeValidationService } from '../../services/validations/home-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        step1: this.fb.group({
          account: this.fb.control('', {
            validators: [HomeValidationService.account],
          }),
        }),
      },
      {
        updateOn: 'submit',
      }
    );
  }

  submit() {
    this.form.markAllAsTouched();
    console.log(this.form);
  }
}
