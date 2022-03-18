import { AboutModule } from './about/about.module';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, HomeModule, AboutModule],
  exports: [HomeModule, AboutModule],
  providers: [],
})
export class PageModule {}
