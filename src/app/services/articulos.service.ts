import { Injectable } from '@angular/core';
import { Articulo } from '../models_entity/articulo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map , catchError} from 'rxjs/operators';
import swal from 'sweetalert2';

import { Router } from '@angular/router';
import {throwError} from 'rxjs';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private urlEndPoint: string = 'http://localhost:8080/api/articulos';

    private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient, private router: Router){}

    getArticulos(page: number):Observable<any>{
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
            map((response: any) => {
                (response.content as Articulo[]).map(articulo =>{
                    return articulo;
                });
                return response;
            })
        );
    }
}
