import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/usuarios/"
  
  login(usuario:any){
    return this.http.post(this.url+"login",usuario.value);
  }

  crearUsuario(usuario:any){
    return this.http.post(this.url+"create",usuario.value);
  }

  obtenerUsuarios(){
    return this.http.get(this.url);
  }

  obtenerUsuariosPorPerfil(perfil:any){
    return this.http.get(this.url+"perfil/"+perfil);
  }
}
