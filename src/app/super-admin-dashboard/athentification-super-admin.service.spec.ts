import { TestBed } from '@angular/core/testing';

import { AthentificationSuperAdminService } from './athentification-super-admin.service';

describe('AthentificationSuperAdminService', () => {
  let service: AthentificationSuperAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthentificationSuperAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
