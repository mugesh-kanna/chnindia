import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolManagementSystemComponent } from './school-management-system.component';

describe('SchoolManagementSystemComponent', () => {
  let component: SchoolManagementSystemComponent;
  let fixture: ComponentFixture<SchoolManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
