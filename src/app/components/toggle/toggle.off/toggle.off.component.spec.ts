import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOffComponent } from './toggle.off.component';

describe('ToggleOffComponent', () => {
  let component: ToggleOffComponent;
  let fixture: ComponentFixture<ToggleOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
