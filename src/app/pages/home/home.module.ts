import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule,HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
