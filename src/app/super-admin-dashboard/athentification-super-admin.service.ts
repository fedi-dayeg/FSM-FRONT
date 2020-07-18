import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Admin} from '../Interface/admin';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AthentificationSuperAdminService {
  private currentSuperAdminSubject: BehaviorSubject<Admin>;
  public currentSuperAdmin: Observable<Admin>;
  private url = 'http://localhost:5000/api/public';

  constructor(private http: HttpClient) {
    this.currentSuperAdminSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentSuperAdmin')));
    this.currentSuperAdmin = this.currentSuperAdminSubject.asObservable();
  }

  public get currentSuperAdminValue(): Admin {
    return this.currentSuperAdminSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(this.url + '/superadmin/login', {email, password})
      .pipe(map(admin => {
        localStorage.setItem('currentSuperAdmin', JSON.stringify(admin));
        this.currentSuperAdminSubject.next(admin);
        return admin;
      }));
  }

  logout() {
    localStorage.removeItem('currentSuperAdmin');
    this.currentSuperAdminSubject.next(null);
  }
}
