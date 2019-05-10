import { TestBed } from '@angular/core/testing';

import { OsdCoreUISPService } from './osd-core-ui-sp.service';

describe('OsdCoreUISPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsdCoreUISPService = TestBed.get(OsdCoreUISPService);
    expect(service).toBeTruthy();
  });
});
