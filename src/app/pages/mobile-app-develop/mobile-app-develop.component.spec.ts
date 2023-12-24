import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppDevelopComponent } from './mobile-app-develop.component';

describe('MobileAppDevelopComponent', () => {
  let component: MobileAppDevelopComponent;
  let fixture: ComponentFixture<MobileAppDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppDevelopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
