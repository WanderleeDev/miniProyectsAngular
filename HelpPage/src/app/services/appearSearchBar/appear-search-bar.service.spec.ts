import { TestBed } from '@angular/core/testing';

import { AppearSearchBarService } from './appear-search-bar.service';

describe('AppearSearchBarService', () => {
  let service: AppearSearchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppearSearchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
