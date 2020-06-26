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
  addManifestation(manifestations: Manifestations) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.url + '/addactualite', {
      titre: manifestations.titre,
      date: manifestations.date,
      description: manifestations.description
    });
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

  updateActualite(id: string, actualite: Actualite) {

    return this.http.put(this.url + `/updateact/${id}`, {
      titre: actualite.titre,
      date: actualite.date,
      description: actualite.description
    });
  }

}
