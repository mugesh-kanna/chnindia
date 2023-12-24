import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrOutsourceComponent } from './hr-outsource.component';

describe('HrOutsourceComponent', () => {
  let component: HrOutsourceComponent;
  let fixture: ComponentFixture<HrOutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrOutsourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrOutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
