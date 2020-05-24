import {Router, RouterModule, Routes} from '@angular/router';
import {HomeIndexComponent} from './home-index/home-index.component';
import {NgModule} from '@angular/core';
import {NouveautesComponent} from './nouveautes/nouveautes.component';
import {ManifestationDetailComponent} from './manifestation-detail/manifestation-detail.component';
import {ManifestationDetailIndexComponent} from './manifestation-detail-index/manifestation-detail-index.component';
import {ManifestationsPageComponent} from './manifestations-page/manifestations-page.component';
import {ActualiteDetailComponent} from './actualite-detail/actualite-detail.component';
import {ActualiteDetailIndexComponent} from './actualite-detail-index/actualite-detail-index.component';
import {MajDetailIndexComponent} from './maj-detail-index/maj-detail-index.component';

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
  },
  {
    path: 'manifestation',
    component: ManifestationsPageComponent
  },
  {
    path: 'actualite/:id',
    component: ActualiteDetailIndexComponent
  },
  {
    path: 'maj/:id',
    component: MajDetailIndexComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePublicRoutingModule {
}
