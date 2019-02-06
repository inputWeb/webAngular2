import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models_entity/usuario';
import { UsuariosService } from '../services/usuarios.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo: string = "Login"

  private usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {

  }

  create(): void {
    this.usuarioService.create(this.usuario)
      .subscribe(json => {
        swal('Nuevo Usuario Registrado!', `${json.mensaje}: ${json.usuario.username}`, 'success');
      })
  }

}
