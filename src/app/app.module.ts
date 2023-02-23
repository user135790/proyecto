import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormusuariosComponent } from './formusuarios/formusuarios.component';
import { MostrardatosComponent } from './mostrardatos/mostrardatos.component';
import { DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview'


@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    FormusuariosComponent,
    MostrardatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    BrowserAnimationsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
