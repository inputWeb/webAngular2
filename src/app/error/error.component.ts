import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public titulo:String;

  constructor() { 
    this.titulo = "ERROR 404 LA RUTA NO EXISTE! ;)";
  }

  ngOnInit() {
  }

}
