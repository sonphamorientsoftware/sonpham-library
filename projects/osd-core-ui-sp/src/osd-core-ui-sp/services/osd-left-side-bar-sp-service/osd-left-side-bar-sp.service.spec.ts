import { TestBed } from '@angular/core/testing';

import { OsdLeftSideBarSPService } from './osd-left-side-bar-sp.service';

describe('OsdLeftSideBarSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsdLeftSideBarSPService = TestBed.get(OsdLeftSideBarSPService);
    expect(service).toBeTruthy();
  });
});
