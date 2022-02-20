import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profileForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm();
  }

  registerForm() {
    this.profileForm = this.fb.group({
      username: [null],
    });
  }

  submit() {
    console.log(this.profileForm.value);
    if (!this.profileForm.valid) return;
  }
}
