import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AthentificationSuperAdminService} from './athentification-super-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSuperAdminGuard implements CanActivate {
  constructor(private router: Router,
              private athentificationSuperAdminService: AthentificationSuperAdminService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const currentSuperAdmin = this.athentificationSuperAdminService.currentSuperAdminValue;
    if (currentSuperAdmin ) {
      return true;
    }
    this.router.navigate(['/dashboardadmin/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
