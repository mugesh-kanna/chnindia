import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedWifiComponent } from './managed-wifi.component';

describe('ManagedWifiComponent', () => {
  let component: ManagedWifiComponent;
  let fixture: ComponentFixture<ManagedWifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedWifiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
