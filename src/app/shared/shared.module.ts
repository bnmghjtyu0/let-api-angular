import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { A11yNavbarComponent } from './components/a11y-navbar/a11y-navbar.component';
import { FormComponent } from './components/form/form.component';
import { DemoMaterialModule } from '../material-modules';

const components = [A11yNavbarComponent, FormComponent, CustomInputComponent];
@NgModule({
  imports: [FormsModule, ReactiveFormsModule, DemoMaterialModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
