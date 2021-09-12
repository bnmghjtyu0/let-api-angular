import { Component, OnInit, Input } from '@angular/core';

export type Type = 'outlined' | 'fill' | null;
export type Theme = 'primary' | 'default' | null;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  host: {
    '[class.btn-primary]': `theme === 'primary'`,
    '[class.btn-outlined]': `type === 'outlined'`,
  },
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: Type = 'outlined';
  @Input() theme: Theme = 'default';

  constructor() {}

  ngOnInit(): void {
    console.log(this.type);
    console.log(this.theme);
  }
}
