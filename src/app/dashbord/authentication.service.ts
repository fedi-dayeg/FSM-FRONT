import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Admin} from '../Interface/admin';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentAdminSubject: BehaviorSubject<Admin>;
  public currentAdmin: Observable<Admin>;
  private url = 'http://localhost:5000/api/public';

  constructor(private http: HttpClient) {
    this.currentAdminSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentAdmin')));
    this.currentAdmin = this.currentAdminSubject.asObservable();
  }

  public get currentAdminValue(): Admin {
    return this.currentAdminSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(this.url + '/admin/login', {email, password})
      .pipe(map(admin => {
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        this.currentAdminSubject.next(admin);
        return admin;
      }));
  }

  logout() {
    localStorage.removeItem('currentAdmin');
    this.currentAdminSubject.next(null);
  }
}
