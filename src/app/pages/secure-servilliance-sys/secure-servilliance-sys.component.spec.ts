import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureServillianceSysComponent } from './secure-servilliance-sys.component';

describe('SecureServillianceSysComponent', () => {
  let component: SecureServillianceSysComponent;
  let fixture: ComponentFixture<SecureServillianceSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureServillianceSysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureServillianceSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
