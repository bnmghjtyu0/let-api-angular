import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CommonTableModule } from '../../shared/components/table';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CommonTableModule],
})
export class HomeModule {}
