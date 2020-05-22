import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeIndexComponent} from './home-index/home-index.component';
import {SliderComponent} from './slider/slider.component';
import {ActualitesComponent} from './actualites/actualites.component';
import {ManifestationsComponent} from './manifestations/manifestations.component';
import {MajComponent} from './maj/maj.component';
import {HomePublicRoutingModule} from './home-public-routing.module';
import {NouveautesComponent} from './nouveautes/nouveautes.component';
import {ImageSliderComponent} from './image-slider/image-slider.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {EspaceIntranetComponent} from './espace-intranet/espace-intranet.component';
import {AccordionComponent} from './accordion/accordion.component';
import {ManifestationDetailComponent} from './manifestation-detail/manifestation-detail.component';
import {ManifestationDetailIndexComponent} from './manifestation-detail-index/manifestation-detail-index.component';
import {ManifestationsPageComponent} from './manifestations-page/manifestations-page.component';
import {SharedModule} from '../shared/shared.module';
import {TruncatePipe} from './truncate.pipe';
import {ManifestationsCardComponent} from './manifestations-card/manifestations-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NouveautesCardComponent} from './nouveautes-card/nouveautes-card.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomeIndexComponent,
    SliderComponent,
    ActualitesComponent,
    ManifestationsComponent,
    MajComponent,
    NouveautesComponent,
    ImageSliderComponent,
    EspaceIntranetComponent,
    AccordionComponent,
    ManifestationDetailComponent,
    ManifestationDetailIndexComponent,
    ManifestationsPageComponent,
    TruncatePipe,
    ManifestationsCardComponent,
    NouveautesCardComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HomePublicRoutingModule,
    NgImageSliderModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class HomePublicModule {
}
