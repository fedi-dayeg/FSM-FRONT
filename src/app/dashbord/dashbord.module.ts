import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashbordRoutingModule} from './dashbord-routing.module';
import {HomeDashbordComponent} from './home-dashbord/home-dashbord.component';
import {CardPostInformationsComponent} from './card-post-informations/card-post-informations.component';
import {ActualiteCardComponent} from './actualite-card/actualite-card.component';
import {ManifestationsCardComponent} from './manifestations-card/manifestations-card.component';
import {BlogCardComponent} from './blog-card/blog-card.component';
import {MajCardComponent} from './maj-card/maj-card.component';
import {ActualiteAjoutModalComponent} from './actualite-ajout-modal/actualite-ajout-modal.component';

import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import { SafePipePipe } from '../Core/safe-pipe.pipe';
import { ActualiteConsulterHomeComponent } from './actualite-consulter-home/actualite-consulter-home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {StringReducePipe} from './string-reduce.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ActualiteUpdateModalComponent } from './actualite-update-modal/actualite-update-modal.component';



@NgModule({
  declarations: [HomeDashbordComponent,
    CardPostInformationsComponent,
    ActualiteCardComponent,
    ManifestationsCardComponent,
    BlogCardComponent,
    MajCardComponent,
    ActualiteAjoutModalComponent,
    SafePipePipe,
    ActualiteConsulterHomeComponent,
    SideNavComponent, StringReducePipe, ActualiteUpdateModalComponent
  ],
  exports: [
    SafePipePipe
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgxPaginationModule,
  ]
})
export class DashbordModule {
}
