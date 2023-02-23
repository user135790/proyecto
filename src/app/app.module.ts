import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormusuariosComponent } from './formusuarios/formusuarios.component';
import { MostrardatosComponent } from './mostrardatos/mostrardatos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    FormusuariosComponent,
    MostrardatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
