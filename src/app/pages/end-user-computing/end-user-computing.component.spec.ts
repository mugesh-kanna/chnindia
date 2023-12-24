import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserComputingComponent } from './end-user-computing.component';

describe('EndUserComputingComponent', () => {
  let component: EndUserComputingComponent;
  let fixture: ComponentFixture<EndUserComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserComputingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
