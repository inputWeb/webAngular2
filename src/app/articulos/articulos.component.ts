import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models_entity/articulo';
import { ArticulosService } from '../services/articulos.service';
import { ActivatedRoute } from '@angular/router'

export interface Cards {
  color: string;
  columnas: number;
  filas: number;
  texto: string;
}

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[];
  paginador: any;

  constructor(
    private articuloService: ArticulosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page:number =+ params.get('page');

      if(!page){
        page=0;
      }

      this.articuloService.getArticulos(page).subscribe(
        response => {
          this.articulos = response.content as Articulo[];
          this.paginador = response;
        }
    );
    
    })
  }
}
