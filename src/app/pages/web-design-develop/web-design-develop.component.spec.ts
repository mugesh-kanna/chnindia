import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignDevelopComponent } from './web-design-develop.component';

describe('WebDesignDevelopComponent', () => {
  let component: WebDesignDevelopComponent;
  let fixture: ComponentFixture<WebDesignDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignDevelopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDesignDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
