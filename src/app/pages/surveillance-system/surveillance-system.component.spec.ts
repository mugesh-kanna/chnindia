import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceSystemComponent } from './surveillance-system.component';

describe('SurveillanceSystemComponent', () => {
  let component: SurveillanceSystemComponent;
  let fixture: ComponentFixture<SurveillanceSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillanceSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
