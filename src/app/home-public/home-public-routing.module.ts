import {Router, RouterModule, Routes} from '@angular/router';
import {HomeIndexComponent} from './home-index/home-index.component';
import {NgModule} from '@angular/core';
import {NouveautesComponent} from './nouveautes/nouveautes.component';
import {ManifestationDetailComponent} from './manifestation-detail/manifestation-detail.component';
import {ManifestationDetailIndexComponent} from './manifestation-detail-index/manifestation-detail-index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent,
  },
  {
    path: 'nouveaute',
    component: NouveautesComponent,
  },
  {
    path: 'manifestation/:id',
    component: ManifestationDetailIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePublicRoutingModule {
}
