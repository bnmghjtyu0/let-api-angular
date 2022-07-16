import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWrapComponent } from './widget-wrap.component';

describe('WidgetWrapComponent', () => {
  let component: WidgetWrapComponent;
  let fixture: ComponentFixture<WidgetWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
