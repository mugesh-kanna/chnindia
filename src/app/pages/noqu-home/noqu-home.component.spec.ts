import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoquHomeComponent } from './noqu-home.component';

describe('NoquHomeComponent', () => {
  let component: NoquHomeComponent;
  let fixture: ComponentFixture<NoquHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoquHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoquHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
