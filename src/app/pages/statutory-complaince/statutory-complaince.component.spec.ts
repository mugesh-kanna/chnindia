import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutoryComplainceComponent } from './statutory-complaince.component';

describe('StatutoryComplainceComponent', () => {
  let component: StatutoryComplainceComponent;
  let fixture: ComponentFixture<StatutoryComplainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutoryComplainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutoryComplainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
