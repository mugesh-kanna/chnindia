import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterManageComponent } from './data-center-manage.component';

describe('DataCenterManageComponent', () => {
  let component: DataCenterManageComponent;
  let fixture: ComponentFixture<DataCenterManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCenterManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCenterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
