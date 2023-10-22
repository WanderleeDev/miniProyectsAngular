import { TestBed } from '@angular/core/testing';

import { CountryDataHubService } from './country-data-hub.service';

describe('CountryDataHubService', () => {
  let service: CountryDataHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDataHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
