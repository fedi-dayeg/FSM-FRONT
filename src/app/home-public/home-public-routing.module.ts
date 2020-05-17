import {Router, RouterModule, Routes} from '@angular/router';
import {HomeIndexComponent} from './home-index/home-index.component';
import {NgModule} from '@angular/core';
import {NouveautesComponent} from './nouveautes/nouveautes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent,
  },
  {
    path: 'nouveaute',
    component: NouveautesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePublicRoutingModule {
}
