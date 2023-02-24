import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { TipoPerfil, Usuario } from 'src/model/usuario';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  constructor(private form:FormBuilder, private http:HttpClient, private uService:UsuarioServiceService){
  }

  /*
    Definicion del Formulario
  */
  formSesion=this.form.group({
    nombre: ['',Validators.required],
    contrasena: ['',Validators.required]
  });
  
  //Variable de control del comportamiento de componentes
  sesionIniciada=false;
  rol=localStorage.getItem('sesion');

  /*
    Definicion del metodo post para realizar el login
  */
  enviar(){
    console.log(this.rol);
    const enviar=from(this.uService.login(this.formSesion))
    enviar.subscribe((response:any)=>{ 
      if(response.perfil == TipoPerfil.ADMIN || response.perfil == TipoPerfil.INVITADO){
        localStorage.setItem('sesion', response.perfil);
        this.rol=response.perfil;
      }
    })
    this.formSesion.reset();
  }

  cerrarSesion(){
    localStorage.clear();
    this.rol=localStorage.getItem('sesion');
  }
}
