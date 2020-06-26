import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-public/home-public.module').then(m => m.HomePublicModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
