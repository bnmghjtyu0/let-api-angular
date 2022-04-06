import { NgModule } from '@angular/core';
import { BaseFormComponent } from '../shared';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BaseFormComponent, HomeComponent],
  imports: [],
  exports:[BaseFormComponent, HomeComponent]
})
export class PagesModule {}
