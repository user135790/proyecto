import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  formSesion=this.form.group({
    nombre: [""],
    contrasena: [""]
  });
  
  sesionIniciada=false;
  rol="";
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
