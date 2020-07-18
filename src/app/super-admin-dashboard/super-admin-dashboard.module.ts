import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuperAdminRoutingModule} from './super-admin-routing.module';
import {SperAdminHomeDachboardComponent} from './sper-admin-home-dachboard/sper-admin-home-dachboard.component';
import {LoginSuperAdminComponent} from './login-super-admin/login-super-admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtSuperAdminInterceptor} from './jwt-super-admin.interceptor';
import {ErrorSuperAdminInterceptor} from './error-super-admin.interceptor';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {AjouterAdminComponent} from './ajouter-admin/ajouter-admin.component';
import {ApdateAdminComponent} from './apdate-admin/apdate-admin.component';
import {AlertSuperAdminService} from './alert-super-admin.service';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [SperAdminHomeDachboardComponent,
    LoginSuperAdminComponent,
    ListAdminComponent,
    AjouterAdminComponent,
    ApdateAdminComponent,
    AlertComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtSuperAdminInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorSuperAdminInterceptor, multi: true},
  ]
})
export class SuperAdminDashboardModule {
}
