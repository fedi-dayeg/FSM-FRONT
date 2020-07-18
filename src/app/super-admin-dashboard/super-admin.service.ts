import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SuperAdmin} from '../Interface/super-admin';
import {SuperAdminApiResponse} from '../Interface/super-admin-api-response';
import {catchError, map} from 'rxjs/operators';
import {Admin} from '../Interface/admin';
import {AdminApiResponse} from '../Interface/admin-api-response';
import {Manifestations} from '../Interface/manifestations';
import {MAnifestationApiResponse} from '../Interface/manifestation-api-response';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  private url = 'http://localhost:5000/api/public';

  private formatError(error: any) {
    return throwError(error.error);
  }

  constructor(private http: HttpClient) {
  }

  // Get All the Admin
  getAdmins(): Observable<Admin[]> {
    return this.http.get<AdminApiResponse>(this.url + '/getadmin').pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }

  addAdmin(admin: Admin) {
    return this.http.post(this.url + '/admin', {
      email: admin.email,
      password: admin.password,
      nom: admin.nom,
      prenom: admin.prenom
    });
  }

  deleteAdmin(id: string): Observable<Admin[]> {
    return this.http.delete<AdminApiResponse>(`${this.url}/admin/delete/${id}`).pipe(
      map((response => response.data)),
    );
  }

  // Service to update Admin
  updateAdmin(id: string, admin: Admin) {

    return this.http.put(this.url + `/update/admin/${id}`, {
      email: admin.email,
      nom: admin.nom,
      prenom: admin.prenom
    });
  }

  getAdminById(id: string): Observable<Admin[]> {
    return this.http.get<AdminApiResponse>(`${this.url}/admin/${id}`).pipe(
      map((response => response.data)),
      catchError(this.formatError)
    );
  }
}
