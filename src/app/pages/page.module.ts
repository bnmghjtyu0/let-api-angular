import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '../shared';
import { SharedMaterialModule } from '../shared-material/shared-material';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BaseFormComponent, HomeComponent],
  imports: [FormsModule, SharedMaterialModule, ReactiveFormsModule],
  exports: [BaseFormComponent, HomeComponent],
})
export class PagesModule {}
