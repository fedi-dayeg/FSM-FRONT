import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import {EtudiantsRoutingModule} from './etudiants-routing.module';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomePublicModule} from '../home-public/home-public.module';



@NgModule({
  declarations: [LoginEtudiantComponent, RegisterEtudiantComponent],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    ReactiveFormsModule,
    HomePublicModule
  ]
})
export class EtudiantsModule { }
