import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightfaxServerComponent } from './rightfax-server.component';

describe('RightfaxServerComponent', () => {
  let component: RightfaxServerComponent;
  let fixture: ComponentFixture<RightfaxServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightfaxServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightfaxServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
