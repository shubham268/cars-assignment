import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInquiryComponent } from './car-inquiry.component';

describe('CarInquiryComponent', () => {
  let component: CarInquiryComponent;
  let fixture: ComponentFixture<CarInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
