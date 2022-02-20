import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'a11y-navbar',
  templateUrl: './a11y-navbar.component.html',
  styleUrls: ['./a11y-navbar.component.scss'],
})
export class A11yNavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  open() {
    this.sidenav.open();
  }
  constructor() {}

  ngOnInit(): void {}
}
