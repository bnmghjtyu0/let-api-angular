import { Directive, Input } from '@angular/core';

@Directive({ selector: 'pane' })
export class CommonTableDirective {
  @Input() id!: string;
}
