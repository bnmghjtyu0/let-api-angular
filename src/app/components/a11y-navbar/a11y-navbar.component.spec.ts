import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yNavbarComponent } from './a11y-navbar.component';

describe('A11yNavbarComponent', () => {
  let component: A11yNavbarComponent;
  let fixture: ComponentFixture<A11yNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A11yNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
