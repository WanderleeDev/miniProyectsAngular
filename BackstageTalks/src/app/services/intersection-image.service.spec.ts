import { TestBed } from '@angular/core/testing';

import { IntersectionImageService } from './intersection-image.service';

describe('IntersectionImageService', () => {
  let service: IntersectionImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersectionImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
