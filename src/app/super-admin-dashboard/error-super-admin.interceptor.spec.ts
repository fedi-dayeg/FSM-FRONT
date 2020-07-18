import { TestBed } from '@angular/core/testing';

import { ErrorSuperAdminInterceptor } from './error-super-admin.interceptor';

describe('ErrorSuperAdminInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorSuperAdminInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorSuperAdminInterceptor = TestBed.inject(ErrorSuperAdminInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
