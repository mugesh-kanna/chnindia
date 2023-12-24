import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPermanentStaffingComponent } from './temp-permanent-staffing.component';

describe('TempPermanentStaffingComponent', () => {
  let component: TempPermanentStaffingComponent;
  let fixture: ComponentFixture<TempPermanentStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempPermanentStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempPermanentStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
