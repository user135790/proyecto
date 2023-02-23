import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { TipoPerfil } from 'src/model/usuario';

@Component({
  selector: 'app-formusuarios',
  templateUrl: './formusuarios.component.html',
  styleUrls: ['./formusuarios.component.css']
})
export class FormusuariosComponent {

  constructor(private form:FormBuilder,private http:HttpClient){}

  url="http://localhost:8080/usuarios/";

  formUsuarios=this.form.group({
    nombre: [""],
    contrasena: [""],
    correoElectronico:[""],
    perfil: "ADMINISTRADOR"
  });

  tipoPerfil=[TipoPerfil.ADMIN,TipoPerfil.INVITADO];

  enviar(){
    const sesion=from(this.http.post(this.url+"create",this.formUsuarios.value));
    
    this.http.post(this.url+"create",this.formUsuarios.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error)
      });
  }
}
