import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHelpComponent } from './gallery-help.component';

describe('GalleryHelpComponent', () => {
  let component: GalleryHelpComponent;
  let fixture: ComponentFixture<GalleryHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryHelpComponent]
    });
    fixture = TestBed.createComponent(GalleryHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
