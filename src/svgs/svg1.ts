import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-star',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 24 24"
    [attr.fill]="fill"
    [attr.stroke]="strokeColor"
    (click)="changeColor()"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>`,
})
export class Svg1 {
  @Input() fill: string = 'rgb(255,255,255)';
  @Input() width: string = '40';
  @Input() height: string = '40';
  strokeColor = 'rgb(0,0,0)';
  toggle: boolean = true;

  changeColor() {
    this.toggle = !this.toggle;
    this.fill = this.toggle ? 'rgb(255,255,255)' : 'rgb(255,255,0)';
  }
}
