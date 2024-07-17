import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { error } from 'console';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any;
  usuarioActual = null;
  indiceActual = -1;
  nombre = "";

  constructor(private usuarioService: UsuarioService) {

  }
  ngOnInit(): void {
    this.traerUsuarios();
  }
  traerUsuarios(): void {
    this.usuarioService.getAll().subscribe(data => { this.usuarios = data; console.log(data); }, error => { console.log(error); });

  }

}
