import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-public/home-public.module').then(m => m.HomePublicModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
  },
  {
    path: 'dashboardadmin',
    loadChildren: () => import('./super-admin-dashboard/super-admin-dashboard.module').then(m => m.SuperAdminDashboardModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
