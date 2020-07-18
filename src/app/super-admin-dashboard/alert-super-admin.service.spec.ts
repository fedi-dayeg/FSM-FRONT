import { TestBed } from '@angular/core/testing';

import { AlertSuperAdminService } from './alert-super-admin.service';

describe('AlertSuperAdminService', () => {
  let service: AlertSuperAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSuperAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
