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

import {ManifestationsCardComponent} from './manifestations-card/manifestations-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NouveautesCardComponent} from './nouveautes-card/nouveautes-card.component';
import { ActualiteDetailComponent } from './actualite-detail/actualite-detail.component';
import { ActualiteDetailIndexComponent } from './actualite-detail-index/actualite-detail-index.component';
import { MajDetailIndexComponent } from './maj-detail-index/maj-detail-index.component';
import { MajDetailComponent } from './maj-detail/maj-detail.component';
import { GalerieIndexComponent } from './galerie-index/galerie-index.component';
import { GalerieComponent } from './galerie/galerie.component';
import { GalerieAlbmComponent } from './galerie-albm/galerie-albm.component';
import { GalerieImageComponent } from './galerie-image/galerie-image.component';
import {GalerieImageIndexComponent} from './galerie-image-index/galerie-image-index.component';
import {DashbordModule} from '../dashbord/dashbord.module';
import {TruncatePipe} from '../Core/truncate.pipe';






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
    NouveautesCardComponent,
    ActualiteDetailComponent,
    ActualiteDetailIndexComponent,
    MajDetailIndexComponent,
    MajDetailComponent,
    GalerieIndexComponent,
    GalerieComponent,
    GalerieAlbmComponent,
    GalerieImageComponent,
    GalerieIndexComponent,
    GalerieImageIndexComponent,

  ],
    exports: [
        NavBarComponent,
        TruncatePipe
    ],
    imports: [
        CommonModule,
        HomePublicRoutingModule,
        NgImageSliderModule,
        SharedModule,
        NgxPaginationModule,
        DashbordModule,
    ]
})
export class HomePublicModule {
}
