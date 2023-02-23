import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  constructor(private form:FormBuilder){}

  formSesion=this.form.group({
    nombre: [],
    contrasena: []
  });

  enviar(){
    console.log(this.formSesion.value)
  }
}
