import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeDashbordComponent} from './home-dashbord/home-dashbord.component';
import {ActualiteConsulterHomeComponent} from './actualite-consulter-home/actualite-consulter-home.component';
import {ManifestationConsulterHomeComponent} from './manifestation-consulter-home/manifestation-consulter-home.component';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {AuthGuard} from './auth.guard';
import {MajConsulterHomeComponent} from './maj-consulter-home/maj-consulter-home.component';
import {ListEtudiantsComponent} from './list-etudiants/list-etudiants.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashbordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actualite/detail',
    component: ActualiteConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/actualite/detail/:id',
    component: ActualiteConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manifestation/detail',
    component: ManifestationConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/manifestation/detail/:id',
    component: ManifestationConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'maj/detail',
    component: MajConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/maj/detail/:id',
    component: MajConsulterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginAdminComponent
  },
  {
    path: 'etudiants',
    component: ListEtudiantsComponent
  },
  { path: '**', redirectTo: '' }

];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashbordRoutingModule {
}
