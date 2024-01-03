import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoquChannelPartnerComponent } from './noqu-channel-partner.component';

describe('NoquChannelPartnerComponent', () => {
  let component: NoquChannelPartnerComponent;
  let fixture: ComponentFixture<NoquChannelPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoquChannelPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoquChannelPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
