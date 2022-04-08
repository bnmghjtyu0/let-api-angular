import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeRangePickerComponent } from './datetime-range-picker.component';

describe('DatetimeRangePickerComponent', () => {
  let component: DatetimeRangePickerComponent;
  let fixture: ComponentFixture<DatetimeRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimeRangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
