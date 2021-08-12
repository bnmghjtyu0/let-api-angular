import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PostComponent } from '../../pages/post/post.component';

@NgModule({
  declarations: [DefaultComponent, HomeComponent, PostComponent],
  imports: [CommonModule, RouterModule],
})
export class DefaultModule {}
