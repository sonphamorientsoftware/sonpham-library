import { TestBed } from '@angular/core/testing';

import { OsdHeaderSPService } from './osd-header-sp.service';

describe('OsdHeaderSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsdHeaderSPService = TestBed.get(OsdHeaderSPService);
    expect(service).toBeTruthy();
  });
});
