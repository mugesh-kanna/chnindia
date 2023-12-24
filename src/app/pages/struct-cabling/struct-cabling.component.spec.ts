import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructCablingComponent } from './struct-cabling.component';

describe('StructCablingComponent', () => {
  let component: StructCablingComponent;
  let fixture: ComponentFixture<StructCablingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructCablingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructCablingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
