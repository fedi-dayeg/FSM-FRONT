import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, mergeMap, pluck, share, switchMap, toArray} from 'rxjs/operators';

export interface Acualite {
  titre: string;
  description: string;
}

export interface AcutaliteApiResponse {
  data: Array<Acualite>;
}

export interface Manifestations {
  titre: string;
  id: number;
  date: string;
}

export interface MAnifestationApiResponse {
  data: Array<Manifestations>;
}

@Injectable({
  providedIn: 'root'
})
export class HomePublicService {
  private url = 'http://localhost:5000/api/public';
  private pageSize: 10;
  private id: number;


  constructor(private http: HttpClient) {
  }

  // service for get all the Actualite
  getActualite() {
    return this.http.get<AcutaliteApiResponse>(this.url + '/actualite').pipe(
      map((response => response.data)),
    );
  }

  getManifestation() {
    return this.http.get<MAnifestationApiResponse>(this.url + '/manifestationtitle').pipe(
      map((response => response.data))
    );
  }


  getManifestationDetail(id: string) {
    return this.http.get<MAnifestationApiResponse>(`${this.url}/manifestation/${id}`).pipe(
      map((response => response.data))
    );
  }
}

