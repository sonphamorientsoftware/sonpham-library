import { TestBed } from '@angular/core/testing';

import { SonphamLibService } from './sonpham-lib.service';

describe('SonphamLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonphamLibService = TestBed.get(SonphamLibService);
    expect(service).toBeTruthy();
  });
});
