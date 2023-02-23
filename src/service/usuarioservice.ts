import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TipoPerfil, Usuario } from 'src/model/usuario';

@Injectable()
export class UsuarioService{


    constructor(private http:HttpClient){}

    url="http://localhost:8080/";
    obtenerUsuarios(){
        this.http.get(this.url);
    }  

    obtenerUsuariosPorPerfil(perfil:TipoPerfil){
        this.http.get(this.url+"/"+perfil);
    }
    
    postearUsuarios(usuario:Usuario){
        this.http.post(this.url+"create",usuario);
    }

    iniciarSesion(usuario:any, contrasena:any){
        return this.http.post(this.url+"login/"+usuario+"/"+contrasena,{});
    }

}