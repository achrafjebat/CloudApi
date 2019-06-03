import { TestBed } from '@angular/core/testing';

import { OwnService } from './own.service';

describe('OwnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnService = TestBed.get(OwnService);
    expect(service).toBeTruthy();
  });
});
