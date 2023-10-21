import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSectionComponent } from './flag-section.component';

describe('FlagSectionComponent', () => {
  let component: FlagSectionComponent;
  let fixture: ComponentFixture<FlagSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagSectionComponent]
    });
    fixture = TestBed.createComponent(FlagSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
