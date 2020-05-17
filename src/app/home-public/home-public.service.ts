import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap, pluck, share, switchMap, toArray} from 'rxjs/operators';

export interface Acualite {
  titre: string;
  description: string;
}

export interface AcutaliteApiResponse {
  data: Array<Acualite>;
}

@Injectable({
  providedIn: 'root'
})
export class HomePublicService {
  private url = 'http://localhost:5000/api/public';
  private pageSize: 10;

  pageInput: Subject<number>;
  pageOutput: Observable<Acualite>;
  numberOfPage: Subject<number>;

  constructor(private http: HttpClient) {
  }
  // service for get all the Actualite
  getActualite() {
    return this.http.get<AcutaliteApiResponse>(this.url + '/actualite').pipe(
      map((response => response.data)),
    );
  }

  getManifestation() {
  }
}

