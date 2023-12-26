import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSupportResourceComponent } from './it-support-resource.component';

describe('ItSupportResourceComponent', () => {
  let component: ItSupportResourceComponent;
  let fixture: ComponentFixture<ItSupportResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSupportResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSupportResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
