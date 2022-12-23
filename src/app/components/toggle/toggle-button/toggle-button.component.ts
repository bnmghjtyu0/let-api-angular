import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  @Input() on?: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick() {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
