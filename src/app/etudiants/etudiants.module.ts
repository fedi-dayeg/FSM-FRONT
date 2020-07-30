import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import {EtudiantsRoutingModule} from './etudiants-routing.module';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomePublicModule} from '../home-public/home-public.module';
import {SharedModule} from '../shared/shared.module';
import {SuiModalModule} from 'ng2-semantic-ui';



@NgModule({
  declarations: [LoginEtudiantComponent, RegisterEtudiantComponent],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    ReactiveFormsModule,
    HomePublicModule,
    SharedModule,
    SuiModalModule
  ]
})
export class EtudiantsModule { }
