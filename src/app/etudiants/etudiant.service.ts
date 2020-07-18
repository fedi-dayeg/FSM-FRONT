import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../Interface/admin';
import {Etudiants} from '../Interface/etudiants';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url = 'http://localhost:5000/api/public';

  private formatError(error: any) {
    return throwError(error.error);
  }

  constructor(private http: HttpClient) {
  }

  addEtudiant(etudiant: Etudiants) {
    return this.http.post(this.url + '/etudiants', {
      nom: etudiant.nom,
      prenom: etudiant.prenom,
      cin: etudiant.cin,
      etat: etudiant.etat,
      grade: etudiant.grade,
      dateInscription: etudiant.dateInscription,
      email: etudiant.email,
      password: etudiant.password,
      etablissement: etudiant.etablissement,
      universite: etudiant.universite,
      activate: etudiant.activate
    });
  }
}
