import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnChannelPartnerComponent } from './chn-channel-partner.component';

describe('ChnChannelPartnerComponent', () => {
  let component: ChnChannelPartnerComponent;
  let fixture: ComponentFixture<ChnChannelPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChnChannelPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChnChannelPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
