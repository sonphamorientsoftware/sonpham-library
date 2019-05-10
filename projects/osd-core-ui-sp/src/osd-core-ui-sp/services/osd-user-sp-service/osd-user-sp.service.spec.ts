import { TestBed } from '@angular/core/testing';

import { OsdUserSPService } from './osd-user-sp.service';

describe('OsdUserSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsdUserSPService = TestBed.get(OsdUserSPService);
    expect(service).toBeTruthy();
  });
});
