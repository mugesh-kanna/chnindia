import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesRoutersComponent } from './switches-routers.component';

describe('SwitchesRoutersComponent', () => {
  let component: SwitchesRoutersComponent;
  let fixture: ComponentFixture<SwitchesRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchesRoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchesRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
