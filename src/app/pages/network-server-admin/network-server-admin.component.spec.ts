import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkServerAdminComponent } from './network-server-admin.component';

describe('NetworkServerAdminComponent', () => {
  let component: NetworkServerAdminComponent;
  let fixture: ComponentFixture<NetworkServerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkServerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkServerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
