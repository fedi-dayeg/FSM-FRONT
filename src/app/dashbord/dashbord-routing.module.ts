import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeDashbordComponent} from './home-dashbord/home-dashbord.component';
import {ActualiteConsulterHomeComponent} from './actualite-consulter-home/actualite-consulter-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashbordComponent
  },
  {
    path: 'actualite/detail',
    component: ActualiteConsulterHomeComponent
  },
  {
    path: 'dashboard/actualite/detail/:id',
    component: ActualiteConsulterHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule {
}
