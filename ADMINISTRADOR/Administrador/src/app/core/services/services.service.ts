import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'https://my-json-server.typicode.com/ferguevara2000/Simulador-Creditos/administradores'
  
  constructor(private http:HttpClient) { }

  authentication(user:User): Observable<any>{
    return this.http.get(this.url+'?usuario=' + user.username+'&contraseña=' + user.password + '');
  }
}
