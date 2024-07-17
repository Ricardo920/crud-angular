import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  usuarios: any;
  indiceActual = -1;
  nombre = "";
  constructor(private servicioUsuario:UsuarioService){

  }
  ngOnInit(): void {
      
  }
  buscarUsuario(){
    this.servicioUsuario.buscarPorDocumento(this.nombre).subscribe(data=>{this.usuarios=data;console.log (data)},error=>{console.log(error);});
  }

}

