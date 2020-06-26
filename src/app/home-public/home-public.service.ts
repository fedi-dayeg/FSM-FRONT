import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Actualite} from '../Interface/actualite';
import {AcutaliteApiResponse} from '../Interface/acutalite-api-response';
import {Manifestations} from '../Interface/manifestations';
import {MAnifestationApiResponse} from '../Interface/manifestation-api-response';
import {Maj} from '../Interface/maj';
import {MajApiResponse} from '../Interface/maj-api-response';
import {Albums} from '../Interface/albums';
import {AlbumsApiResponse} from '../Interface/albums-api-response';
import {Image} from '../Interface/image';
import {ImageApiResponse} from '../Interface/image-api-response';


@Injectable({
  providedIn: 'root'
})
export class HomePublicService {
  private url = 'http://localhost:5000/api/public';
  private pageSize: 10;
  private id: number;

  private formatError(error: any) {
    return throwError(error.error);
  }


    constructor(private http: HttpClient) {
  }

  // service for get all the Actualite
  getActualite(): Observable<Actualite[]> {
    return this.http.get<AcutaliteApiResponse>(this.url + '/actualite').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service for get All the manifestations
  getManifestation(): Observable<Manifestations[]> {
    return this.http.get<MAnifestationApiResponse>(this.url + '/manifestationtitle').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service for get Manifestations by her Id
  getManifestationDetail(id: string): Observable<Manifestations[]> {
    return this.http.get<MAnifestationApiResponse>(`${this.url}/manifestation/${id}`).pipe(
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

  // Service to get Maj
  getMaj(): Observable<Maj[]> {
    return this.http.get<MajApiResponse>(this.url + '/maj').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  // Service For Get Maj Bu Id
  getMajDetail(id: string): Observable<Maj[]> {
    return this.http.get<MajApiResponse>(`${this.url}/maj/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<AlbumsApiResponse>(this.url + '/albums').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  getImageByAlbumId(id: string): Observable<Image[]> {
    return this.http.get<ImageApiResponse>(`${this.url}/images/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }
}


