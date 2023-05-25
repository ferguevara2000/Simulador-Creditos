import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asesor } from '../models/asesor.model'

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  url = 'https://my-json-server.typicode.com/ferguevara2000/Simulador-Creditos/asesores';
  constructor(private http: HttpClient) { }

  obtenerAsesorPorId(idBus: string): Observable<any> {
    return this.http.get(this.url+'/'+idBus);
  }
  listaAsesores(): Observable<any> {
    return this.http.get(this.url);
  }
  guardarAsesor(asesor: Asesor): Observable<any> {
    return this.http.post(this.url,asesor);
  }
  eliminarAsesor(idBus: Number): Observable<any> {
    return this.http.delete(this.url+'/'+idBus);
  }
}
