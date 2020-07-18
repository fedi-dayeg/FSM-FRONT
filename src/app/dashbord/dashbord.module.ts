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
import { ManifestationAjoutModalComponent } from './manifestation-ajout-modal/manifestation-ajout-modal.component';
import { ManifestationConsulterHomeComponent } from './manifestation-consulter-home/manifestation-consulter-home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AlertLoginComponent } from './alert-login/alert-login.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './jwt.interceptor';
import {ErrorInterceptor} from './error.interceptor';
import { MajAjoutModalComponent } from './maj-ajout-modal/maj-ajout-modal.component';
import { MajConsulterHomeComponent } from './maj-consulter-home/maj-consulter-home.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';



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
    SideNavComponent, StringReducePipe,
    ActualiteUpdateModalComponent,
    ManifestationAjoutModalComponent,
    ManifestationConsulterHomeComponent,
    LoginAdminComponent,
    AlertLoginComponent,
    MajAjoutModalComponent,
    MajConsulterHomeComponent,
    ListEtudiantsComponent
  ],
    exports: [
        SafePipePipe,
        AlertLoginComponent
    ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ]
})
export class DashbordModule {
}
