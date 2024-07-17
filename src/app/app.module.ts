import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    BuscarComponent,
    EliminarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

