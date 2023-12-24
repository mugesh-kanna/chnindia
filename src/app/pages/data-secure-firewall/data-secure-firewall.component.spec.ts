import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecureFirewallComponent } from './data-secure-firewall.component';

describe('DataSecureFirewallComponent', () => {
  let component: DataSecureFirewallComponent;
  let fixture: ComponentFixture<DataSecureFirewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSecureFirewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSecureFirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
