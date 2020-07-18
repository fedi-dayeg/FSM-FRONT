import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Manifestations} from '../Interface/manifestations';
import {MAnifestationApiResponse} from '../Interface/manifestation-api-response';
import {catchError, map} from 'rxjs/operators';
import {Actualite} from '../Interface/actualite';
import {AcutaliteApiResponse} from '../Interface/acutalite-api-response';
import {Maj} from '../Interface/maj';
import {MajApiResponse} from '../Interface/maj-api-response';
import {AuthenticationService} from './authentication.service';

import {Etudiants} from '../Interface/etudiants';
import {EtudiantsApiResponse} from '../Interface/etudiants-api-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = 'http://localhost:5000/api/public';

  private formatError(error: any) {
    return throwError(error.error);
  }

  constructor(private http: HttpClient) {
  }

  // Service to get the Total of the manifestation
  getManifestationTotalNumber(): Observable<Manifestations[]> {
    return this.http.get<MAnifestationApiResponse>(this.url + '/manifestationcount').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to get the Total of the Actualite
  getActualiteTotalNumber(): Observable<Actualite[]> {
    return this.http.get<AcutaliteApiResponse>(this.url + '/actualitecount').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to get the Total of the Maj
  getMajTotalNumber(): Observable<Maj[]> {
    return this.http.get<MajApiResponse>(this.url + '/majcount').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to Post a new Actualités
  addActualite(actualite: Actualite) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.url + '/addactualite', {
      titre: actualite.titre,
      date: actualite.date,
      description: actualite.description
    }/*, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentAdmin.token}`)}*/);
  }

  // Service to get all the Actualite
  getActualite(): Observable<Actualite[]> {
    return this.http.get<AcutaliteApiResponse>(this.url + '/getallactualite').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Sevice to delete Actualite
  deleteActualite(id: string): Observable<Actualite[]> {
    return this.http.delete<AcutaliteApiResponse>(`${this.url}/actualiteact/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service call for get Actualite bu Id
  getActualiteDetail(id: string): Observable<Actualite[]> {
    return this.http.get<AcutaliteApiResponse>(`${this.url}/actualite/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to update Actualite
  updateActualite(id: string, actualite: Actualite) {

    return this.http.put(this.url + `/updateact/${id}`, {
      titre: actualite.titre,
      date: actualite.date,
      description: actualite.description
    });
  }

  // Service to Post a new Manifestation
  addManifestation(actualite: Actualite) {
    return this.http.post(this.url + '/addmanifestation', {
      titre: actualite.titre,
      date: actualite.date,
      description: actualite.description
    });
  }

  // Service to get all the Manifestation
  getManifestation(): Observable<Manifestations[]> {
    return this.http.get<MAnifestationApiResponse>(this.url + '/manifestation').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Sevice to delete Manifestation
  deleteManifestation(id: string): Observable<Manifestations[]> {
    return this.http.delete<MAnifestationApiResponse>(`${this.url}/deletman/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service call for get Manifestation bu Id
  getManifestationDetail(id: string): Observable<Manifestations[]> {
    return this.http.get<MAnifestationApiResponse>(`${this.url}/manifestation/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to update Manifestation
  updateManifestation(id: string, manifestation: Manifestations) {

    return this.http.put(this.url + `/updateman/${id}`, {
      titre: manifestation.titre,
      date: manifestation.date,
      description: manifestation.description
    });
  }

  // Service to Post a new Maj
  addMaj(maj: Maj) {
    return this.http.post(this.url + '/addmaj', {
      titre: maj.titre,
      date: maj.date,
      descriptions: maj.descriptions
    });
  }

  // Sevice to delete Maj
  deleteMaj(id: string): Observable<Maj[]> {
    return this.http.delete<MajApiResponse>(`${this.url}/deletmaj/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service to update Maj
  updateMaj(id: string, maj: Maj) {

    return this.http.put(this.url + `/updatemaj/${id}`, {
      titre: maj.titre,
      date: maj.date,
      descriptions: maj.descriptions
    });
  }

  // Service to get all the majs
  getAllMajs(): Observable<Maj[]> {
    return this.http.get<MajApiResponse>(this.url + '/majs').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service call for get Actualite bu Id
  getMajDetail(id: string): Observable<Maj[]> {
    return this.http.get<MajApiResponse>(`${this.url}/maj/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }


  // Get All the Etudiants
  getEtudiants(): Observable<Etudiants[]> {
    return this.http.get<EtudiantsApiResponse>(this.url + '/etudiant/getall').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Unlock Etudiant
  unlockEtudiants(id: number): Observable<Etudiants[]> {
    return this.http.put<EtudiantsApiResponse>(`${this.url}/update/etudiant/${id}`, {}).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // delete Etudiants
  deleteEtudiant(id: number): Observable<Etudiants[]> {
    return this.http.delete<EtudiantsApiResponse>(`${this.url}/etudiant/delete/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }
}


