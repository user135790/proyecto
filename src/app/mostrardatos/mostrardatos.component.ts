import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mostrardatos',
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class MostrardatosComponent {

  constructor(private form:FormBuilder){}

  usuarios:any=[{
    nombre: "Juan",
    correo: "juan@gmail.com",
    perfil: "ADMIN"
  },{
    nombre: "Juan",
    correo: "juan@gmail.com",
    perfil: "ADMIN"
  }]

  tipoPerfil=["Administrador","Invitado"];
  formBusqueda=this.form.group({
    tipoPerfil: [this.tipoPerfil]
  })

  buscar(){
    console.log(this.formBusqueda.value)
  }
}
