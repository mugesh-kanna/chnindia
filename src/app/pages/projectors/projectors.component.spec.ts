import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectorsComponent } from './projectors.component';

describe('ProjectorsComponent', () => {
  let component: ProjectorsComponent;
  let fixture: ComponentFixture<ProjectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
