import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudInfraComponent } from './cloud-infra.component';

describe('CloudInfraComponent', () => {
  let component: CloudInfraComponent;
  let fixture: ComponentFixture<CloudInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
