import { TestBed } from '@angular/core/testing';

import { LeftSideBarService } from './left-side-bar.service';

describe('LeftSideBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftSideBarService = TestBed.get(LeftSideBarService);
    expect(service).toBeTruthy();
  });
});
