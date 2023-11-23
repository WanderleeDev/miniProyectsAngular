import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBtnComponent } from './user-btn.component';

describe('UserBtnComponent', () => {
  let component: UserBtnComponent;
  let fixture: ComponentFixture<UserBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBtnComponent]
    });
    fixture = TestBed.createComponent(UserBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
