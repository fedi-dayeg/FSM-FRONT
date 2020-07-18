import { TestBed } from '@angular/core/testing';

import { JwtSuperAdminInterceptor } from './jwt-super-admin.interceptor';

describe('JwtSuperAdminInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtSuperAdminInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtSuperAdminInterceptor = TestBed.inject(JwtSuperAdminInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
