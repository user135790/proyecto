import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { TipoPerfil } from 'src/model/usuario';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-formusuarios',
  templateUrl: './formusuarios.component.html',
  styleUrls: ['./formusuarios.component.css']
})
export class FormusuariosComponent {

  constructor(private form:FormBuilder,private http:HttpClient, private uService:UsuarioServiceService){}

  /*
    Definicion del formulario para el registro de usuarios
  */
  formUsuarios=this.form.group({
    nombre: ['',Validators.required],
    contrasena: ['',[Validators.minLength(8),Validators.required,Validators.pattern("(?=.*[A-Z])(.*\\d.*)")]],
    confirmarContrasena: ['',[Validators.minLength(8),Validators.required,Validators.pattern("(?=.*[A-Z])(.*\\d.*)")]],
    correoElectronico:['',[Validators.email,Validators.required]],
    perfil: [Validators.required]
  });

  //Variables de control de comportamiento
  tipoPerfil=[TipoPerfil.ADMIN,TipoPerfil.INVITADO];
  confirmarContrasena=false;


  /*
    Definicion de la peticion para crear usuarios
  */
  enviar(){
    const sesion=from(this.uService.crearUsuario(this.formUsuarios));
    if(this.formUsuarios.value.confirmarContrasena === this.formUsuarios.value.contrasena){
      this.confirmarContrasena=false;
      sesion.subscribe({
        next(value) {
          console.log(value);
        },error(err) {
          console.log(err);
        },complete() {
          console.log("operacion exitosa");
      }});
    }else{
      this.confirmarContrasena=true;
    }
    this.formUsuarios.reset();

  }
}
