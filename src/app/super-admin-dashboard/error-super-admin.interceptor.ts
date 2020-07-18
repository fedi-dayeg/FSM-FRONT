import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AthentificationSuperAdminService} from './athentification-super-admin.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorSuperAdminInterceptor implements HttpInterceptor {

  constructor(private athentificationSuperAdminService: AthentificationSuperAdminService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.athentificationSuperAdminService.logout();
        location.reload(true);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
