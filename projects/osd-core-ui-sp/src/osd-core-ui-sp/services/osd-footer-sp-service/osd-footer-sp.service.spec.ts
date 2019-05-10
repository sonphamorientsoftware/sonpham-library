import { TestBed } from '@angular/core/testing';

import { OsdFooterSPService } from './osd-footer-sp.service';

describe('OsdFooterSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsdFooterSPService = TestBed.get(OsdFooterSPService);
    expect(service).toBeTruthy();
  });
});
