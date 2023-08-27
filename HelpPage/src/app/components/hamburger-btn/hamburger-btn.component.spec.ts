import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerBtnComponent } from './hamburger-btn.component';

describe('HamburgerBtnComponent', () => {
  let component: HamburgerBtnComponent;
  let fixture: ComponentFixture<HamburgerBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamburgerBtnComponent]
    });
    fixture = TestBed.createComponent(HamburgerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
