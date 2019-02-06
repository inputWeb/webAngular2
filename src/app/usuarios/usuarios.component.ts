import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: [];
  columnas: string[];

  constructor() { }

  ngOnInit() {
    // this.columns = this.elemento.getColumns();
    // this.characters = this.elemento.getCharacters();
  }

}
