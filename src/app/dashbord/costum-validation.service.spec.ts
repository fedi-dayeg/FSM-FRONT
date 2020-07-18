import { TestBed } from '@angular/core/testing';

import { CostumValidationService } from './costum-validation.service';

describe('CostumValidationService', () => {
  let service: CostumValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
