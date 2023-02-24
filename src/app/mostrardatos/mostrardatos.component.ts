import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TipoPerfil, Usuario } from 'src/model/usuario';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-mostrardatos',
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class MostrardatosComponent implements OnInit{
  

  constructor(private form:FormBuilder, private http:HttpClient,private uService:UsuarioServiceService){}
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
    const usuarios = this.uService.obtenerUsuarios();
    usuarios.subscribe(
      (response:any)=>{
        this.usuarios=response;
      }
    );
  }  

  /*
    Definicion de la peticion para obtener todos los usuarios
    de un mismo perfil
  */
  buscar(){
    this.uService.obtenerUsuariosPorPerfil(this.formBusqueda.value.tipoPerfil).subscribe(
      (response:any)=>{
        this.usuarios=response;
      }
    );
  }
}
