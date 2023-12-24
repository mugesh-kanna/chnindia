import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDevelopComponent } from './application-develop.component';

describe('ApplicationDevelopComponent', () => {
  let component: ApplicationDevelopComponent;
  let fixture: ComponentFixture<ApplicationDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDevelopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
