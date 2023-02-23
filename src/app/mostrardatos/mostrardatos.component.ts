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

  obtenerUsuarios(){
    this.http.get(this.url+"0").subscribe(
      (response:any)=>{
        this.usuarios=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }  

  buscar(){
    this.http.get(this.url+this.formBusqueda.value.tipoPerfil).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
