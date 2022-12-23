import { SwitchComponent } from './../switch/switch.component';
import { ToggleOnComponent } from './toggle.on/toggle.on.component';
import { ToggleOffComponent } from './toggle.off/toggle.off.component';
import { ToggleComponent } from './toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    SwitchComponent,
  ],
  imports: [CommonModule],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    SwitchComponent,
  ],
})
export class ToggleModule {}
