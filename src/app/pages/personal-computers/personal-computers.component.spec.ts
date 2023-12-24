import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComputersComponent } from './personal-computers.component';

describe('PersonalComputersComponent', () => {
  let component: PersonalComputersComponent;
  let fixture: ComponentFixture<PersonalComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalComputersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
