import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubListComponent } from './sub-list.component';

describe('SubListComponent', () => {
  let component: SubListComponent;
  let fixture: ComponentFixture<SubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubListComponent]
    });
    fixture = TestBed.createComponent(SubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
