import { DemoMaterialModule } from './../../material-modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PostComponent } from '../../pages/post/post.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, DemoMaterialModule],
})
export class DefaultModule {}
