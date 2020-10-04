import { TestBed } from '@angular/core/testing';

import { SearchRepoServiceService } from './search-repo-service.service';

describe('SearchRepoServiceService', () => {
  let service: SearchRepoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRepoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

