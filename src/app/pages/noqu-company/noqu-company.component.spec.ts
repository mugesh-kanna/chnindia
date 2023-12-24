import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoquCompanyComponent } from './noqu-company.component';

describe('NoquCompanyComponent', () => {
  let component: NoquCompanyComponent;
  let fixture: ComponentFixture<NoquCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoquCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoquCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
