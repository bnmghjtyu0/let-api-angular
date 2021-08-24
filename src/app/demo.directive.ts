import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keyup') public onKeyup(event: Element) {
    console.log(this.el.nativeElement.value);
  }
}
