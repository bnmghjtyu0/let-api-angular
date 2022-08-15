import { Component, Input, OnInit, Output } from '@angular/core';
import {  FormGroup, FormGroupDirective } from '@angular/forms';
import { FormUtilsService } from 'src/app/services/form-utils.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent implements OnInit {
  childForm!: FormGroup;
  @Input() formGroupName!: string;
  @Input() formRef!: any;

  constructor(
    public formUtilsService: FormUtilsService,
    private formGroupDirective: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.childForm = this.formGroupDirective.control.get(
      this.formGroupName
    ) as FormGroup;
  }
}
