import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: any = TemplateRef;
  constructor() {}

  ngOnInit(): void {}
}
