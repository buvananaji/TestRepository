import { TestBed } from '@angular/core/testing';

import { RrrrrrService } from './rrrrrr.service';

describe('RrrrrrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RrrrrrService = TestBed.get(RrrrrrService);
    expect(service).toBeTruthy();
  });
});
