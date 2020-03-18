import { TestBed } from '@angular/core/testing';

import { ConiferousService } from './coniferous.service';

describe('ConiferousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConiferousService = TestBed.get(ConiferousService);
    expect(service).toBeTruthy();
  });
});
