import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppDevelopComponent } from './game-app-develop.component';

describe('GameAppDevelopComponent', () => {
  let component: GameAppDevelopComponent;
  let fixture: ComponentFixture<GameAppDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAppDevelopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAppDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
