import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginEtudiantComponent} from './login-etudiant/login-etudiant.component';
import {RegisterEtudiantComponent} from './register-etudiant/register-etudiant.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginEtudiantComponent
  },
  {
    path: 'register',
    component: RegisterEtudiantComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule {
}
