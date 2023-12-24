import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredCabelsComponent } from './structured-cabels.component';

describe('StructuredCabelsComponent', () => {
  let component: StructuredCabelsComponent;
  let fixture: ComponentFixture<StructuredCabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredCabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredCabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
