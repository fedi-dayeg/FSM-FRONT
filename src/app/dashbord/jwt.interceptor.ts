import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentAdmin = this.authenticationService.currentAdminValue;
    const TOKEN_HEADER_KEY = 'Authorization';
    if (currentAdmin && currentAdmin.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentAdmin.token}`
        }
      });
      console.log(request);
    }
    return next.handle(request);
  }
}
