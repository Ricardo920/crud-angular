import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';


const routes: Routes = [
 // { path: '',redirectTo: 'usuarios',pathMatch: 'full'},
  { path: 'listado', component: ListaUsuariosComponent},
  { path: 'agregar', component: AgregarUsuarioComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: 'eliminar', component: EliminarComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
