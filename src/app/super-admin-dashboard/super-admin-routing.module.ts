import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SperAdminHomeDachboardComponent} from './sper-admin-home-dachboard/sper-admin-home-dachboard.component';
import {LoginSuperAdminComponent} from './login-super-admin/login-super-admin.component';
import {AuthSuperAdminGuard} from './auth-super-admin.guard';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {AjouterAdminComponent} from './ajouter-admin/ajouter-admin.component';
import {ApdateAdminComponent} from './apdate-admin/apdate-admin.component';


const routes: Routes = [
  {
    path: '',
    component: ListAdminComponent,
    canActivate: [AuthSuperAdminGuard]
  },
  {
    path: 'login',
    component: LoginSuperAdminComponent
  },
  {
    path: 'add/admin',
    component: AjouterAdminComponent,
    canActivate: [AuthSuperAdminGuard]
  },
  {
    path: 'admin/:id',
    component: ApdateAdminComponent,
    canActivate: [AuthSuperAdminGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SuperAdminRoutingModule {
}
