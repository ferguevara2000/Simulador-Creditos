import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://my-json-server.typicode.com/ferguevara2000/Simulador-Creditos';

  constructor(private http: HttpClient) {}

  getAdministradores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/administradores`);
  }

  getAsesores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/asesores`);
  }

  getEntidades(): Observable<any> {
    return this.http.get(`${this.apiUrl}/entidades`);
  }

  getCreditos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos`);
  }
}