import { TestBed } from '@angular/core/testing';

import { CustumValidationSuperAdminService } from './custum-validation-super-admin.service';

describe('CustumValidationSuperAdminService', () => {
  let service: CustumValidationSuperAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustumValidationSuperAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
