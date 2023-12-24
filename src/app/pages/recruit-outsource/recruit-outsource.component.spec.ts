import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitOutsourceComponent } from './recruit-outsource.component';

describe('RecruitOutsourceComponent', () => {
  let component: RecruitOutsourceComponent;
  let fixture: ComponentFixture<RecruitOutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitOutsourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitOutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
