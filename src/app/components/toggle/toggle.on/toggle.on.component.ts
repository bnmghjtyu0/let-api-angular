import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-on',
  templateUrl: './toggle.on.component.html',
  styleUrls: ['./toggle.on.component.scss']
})
export class ToggleOnComponent  {
  @Input() on?: boolean;
}
