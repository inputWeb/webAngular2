import { Injectable } from '@angular/core';
import { Usuario } from '../models_entity/usuario';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = 'http://localhost:8080/api/usuario';

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient, private router: Router){}

    create(usuario: Usuario): Observable<any>{
      return this.http.post<any>(this.urlEndPoint, usuario, {headers: this.httpHeader}).pipe(
        catchError(e =>{
          return throwError(e);
        })
      )
    }
}
