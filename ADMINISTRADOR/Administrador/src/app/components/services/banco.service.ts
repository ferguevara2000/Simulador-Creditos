import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  url = 'https://my-json-server.typicode.com/ferguevara2000/Simulador-Creditos/entidades';
  constructor(private http: HttpClient) { }

  listaEntidades(): Observable<any> {
    return this.http.get(this.url);
  }
}
