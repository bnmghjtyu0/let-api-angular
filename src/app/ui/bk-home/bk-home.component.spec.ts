import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkHomeComponent } from './bk-home.component';

describe('BkHomeComponent', () => {
  let component: BkHomeComponent;
  let fixture: ComponentFixture<BkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
