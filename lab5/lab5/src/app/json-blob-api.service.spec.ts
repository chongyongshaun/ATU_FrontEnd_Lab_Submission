import { TestBed } from '@angular/core/testing';

import { JsonBlobApiService } from './json-blob-api.service';

describe('JsonBlobApiService', () => {
  let service: JsonBlobApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonBlobApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
