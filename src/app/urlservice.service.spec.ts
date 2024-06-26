import { TestBed } from '@angular/core/testing';

import { UrlserviceService } from './urlservice.service';

describe('UrlserviceService', () => {
  let service: UrlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
