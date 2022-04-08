import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '../shared';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BaseFormComponent, HomeComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  exports: [],
})
export class PagesModule {}
