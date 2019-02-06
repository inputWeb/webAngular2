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
  titulo: string = "Inicio de sesión"

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

  // Conexión a la base de datos
  // Registro de usuarios (registro completo con subida de imágen para el perfil)
  // Comprobación de usuarios (correo y contraseña)
  // Validación de los campos, en especial las contraseñas (¡Encriptación!)
  // Inicio de sesión con usuarios validados (usuarios autenticados)
  // Inicio de sesión con redes sociales Google-Facebook
  // Envio de correo electrónico para la recuperación de la contraseña a los usuarios autenticados
  // Notificaciones con sweetalert2





}
