import { TestBed } from '@angular/core/testing';

import { ApiUrlServiceService } from './api-url-service.service';

describe('ApiUrlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUrlServiceService = TestBed.get(ApiUrlServiceService);
    expect(service).toBeTruthy();
  });
});
