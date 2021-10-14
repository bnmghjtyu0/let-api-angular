import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTableComponent } from './rtable.component';

describe('RTableComponent', () => {
  let component: RTableComponent;
  let fixture: ComponentFixture<RTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
