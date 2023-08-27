import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFinderComponent } from './help-finder.component';

describe('HelpFinderComponent', () => {
  let component: HelpFinderComponent;
  let fixture: ComponentFixture<HelpFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpFinderComponent]
    });
    fixture = TestBed.createComponent(HelpFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
