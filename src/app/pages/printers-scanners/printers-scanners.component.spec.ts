import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersScannersComponent } from './printers-scanners.component';

describe('PrintersScannersComponent', () => {
  let component: PrintersScannersComponent;
  let fixture: ComponentFixture<PrintersScannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintersScannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintersScannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
