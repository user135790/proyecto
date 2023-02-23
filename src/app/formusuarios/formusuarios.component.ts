import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formusuarios',
  templateUrl: './formusuarios.component.html',
  styleUrls: ['./formusuarios.component.css']
})
export class FormusuariosComponent {

  constructor(private form:FormBuilder){}

  formUsuarios=this.form.group({
    nombre: [],
    contrasena: [],
    confirmarContrasena: [],
    correo:[],
    tipoPerfil: []
  });

  enviar(){
    console.log(this.formUsuarios.value);
  }
}
