import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TipoPerfil, Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-mostrardatos',
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class MostrardatosComponent implements OnInit{
  

  constructor(private form:FormBuilder, private http:HttpClient){}
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  url= "http://localhost:8080/usuarios/";

  usuarios:Usuario[]=[];

  tipoPerfil=[TipoPerfil.ADMIN,TipoPerfil.INVITADO];
  formBusqueda=this.form.group({
    tipoPerfil: [""]
  })

  /*
    Definicion de la peticion para obtener todos los usuarios
  */
  obtenerUsuarios(){
    this.http.get(this.url).subscribe(
      (response:any)=>{
        this.usuarios=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }  

  /*
    Definicion de la peticion para obtener todos los usuarios
    de un mismo perfil
  */
  buscar(){
    this.http.get(this.url+"perfil/"+this.formBusqueda.value.tipoPerfil).subscribe(
      (response:any)=>{
        console.log(response)
        this.usuarios=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
