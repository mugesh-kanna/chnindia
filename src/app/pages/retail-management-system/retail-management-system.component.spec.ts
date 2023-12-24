import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailManagementSystemComponent } from './retail-management-system.component';

describe('RetailManagementSystemComponent', () => {
  let component: RetailManagementSystemComponent;
  let fixture: ComponentFixture<RetailManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
