import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-modules';
import { FormComponent } from './form/form.component';
import { DatetimeRangePickerComponent } from './datetime-range-picker/datetime-range-picker.component';

@NgModule({
  declarations: [FormComponent, DatetimeRangePickerComponent],
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
