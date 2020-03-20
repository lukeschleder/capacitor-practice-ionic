import { TestBed } from '@angular/core/testing';

import { DeciduousService } from './deciduous.service';

describe('DeciduousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeciduousService = TestBed.get(DeciduousService);
    expect(service).toBeTruthy();
  });
});
