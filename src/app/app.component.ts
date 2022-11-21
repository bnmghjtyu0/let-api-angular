import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'let-api-angular';

  form!: FormGroup;
  value = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      startDate: this.fb.control(new Date('1922-01-01'), [Validators.required]),
      endDate: this.fb.control(new Date(), [Validators.required]),
    });

    this.form.controls.startDate.valueChanges.subscribe(
      (value: any) => (this.value = value)
    );
  }
}
