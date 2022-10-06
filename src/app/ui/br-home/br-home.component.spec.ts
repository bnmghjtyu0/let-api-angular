import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrHomeComponent } from './br-home.component';

describe('BrHomeComponent', () => {
  let component: BrHomeComponent;
  let fixture: ComponentFixture<BrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
