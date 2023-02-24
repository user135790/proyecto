import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { TipoPerfil, Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  constructor(private form:FormBuilder, private http:HttpClient){}

  url="http://localhost:8080/usuarios/"

  /*
    Definicion del Formulario
  */
  formSesion=this.form.group({
    nombre: ['',Validators.required],
    contrasena: ['',Validators.required]
  });
  
  //Variable de control del comportamiento de componentes
  sesionIniciada=false;
  rol="";

  /*
    Definicion del metodo post para realizar el login
  */
  enviar(){
    const sesion=from(this.http.post(this.url+"login",this.formSesion.value));
    sesion.subscribe(
      (response:any)=>{
        console.log(response)
        if(response.perfil == TipoPerfil.ADMIN || response.perfil == TipoPerfil.INVITADO){
          this.sesionIniciada=true;
          this.rol=response.perfil
        }
      })
  }
}
