import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AthentificationSuperAdminService} from './athentification-super-admin.service';

@Injectable()
export class JwtSuperAdminInterceptor implements HttpInterceptor {

  constructor(private athentificationSuperAdminService: AthentificationSuperAdminService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentSuperAdmin = this.athentificationSuperAdminService.currentSuperAdminValue;
    const TOKEN_HEADER_KEY = 'Authorization';
    if (currentSuperAdmin && currentSuperAdmin.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentSuperAdmin.token}`
        }
      });
      console.log(request);
    }
    return next.handle(request);
  }
}
