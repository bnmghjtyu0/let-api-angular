import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ToggleOffComponent } from './toggle.off/toggle.off.component';
import { ToggleOnComponent } from './toggle.on/toggle.on.component';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnChanges {
  @Input() on?: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent = {
    on: false,
  };
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent = {
    on: false,
  };
  @ContentChild(ToggleButtonComponent) toggleButton!: ToggleButtonComponent

  ngAfterContentInit() {
    this.toggleButton?.toggle.subscribe((on) => {
      this.on = on;
      this.toggle.emit(on);
      this.update();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { on } = changes;
    if (on) {
      this.update();
    }
  }

  update() {
    this.toggleOn.on = this.on;
    this.toggleOff.on = this.on;
    this.toggleButton.on = this.on;
  }
}
