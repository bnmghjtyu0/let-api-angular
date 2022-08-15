import { HomeValidationService } from '../../services/validations/home-validation.service';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrls: ['./control-message.component.scss'],
})
export class ControlMessageComponent {
  @Input() control!: AbstractControl;
  constructor(private homeValidationService: HomeValidationService) {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.control.errors,
          propertyName
        ) &&
        this.control.touched
      ) {
        return this.homeValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }
}
