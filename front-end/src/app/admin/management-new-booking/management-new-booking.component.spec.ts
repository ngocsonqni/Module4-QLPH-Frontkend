import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNewBookingComponent } from './management-new-booking.component';

describe('ManagementNewBookingComponent', () => {
  let component: ManagementNewBookingComponent;
  let fixture: ComponentFixture<ManagementNewBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementNewBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementNewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
