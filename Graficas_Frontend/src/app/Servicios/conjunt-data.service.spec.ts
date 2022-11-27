import { TestBed } from '@angular/core/testing';

import { ConjuntDataService } from './conjunt-data.service';

describe('ConjuntDataService', () => {
  let service: ConjuntDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjuntDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
