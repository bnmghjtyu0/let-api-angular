import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-modules';
import { FormComponent } from './form/form.component';
import { DatetimeRangePickerComponent } from './datetime-range-picker/datetime-range-picker.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { LastNameInputComponent } from './reactive-form-field/last-name-input/last-name-input.component';

@NgModule({
  declarations: [
    FormComponent,
    DatetimeRangePickerComponent,
    ControlMessagesComponent,
    LastNameInputComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  exports: [FormComponent],
  providers: [],
})
export class SharedModule {}
