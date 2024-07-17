import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent implements OnInit {
  usuario = {documento:"",nombre:"",correo:"",password:"",rol:"",estado:""};
  enviado = false;
  constructor(private servicioUsuario:UsuarioService){
  }
  rolSeleccionado="";
  estadoSeleccionado="";
  ngOnInit(): void {
      
  }
  guardarUsuario():void {
    const data = {
      documento:this.usuario.documento,
      nombre:this.usuario.nombre,
      correo:this.usuario.correo,
      password:this.usuario.password,
      rol:this.usuario.rol,
      estado:this.usuario.estado,
      
    }
    this.servicioUsuario.agregarUsuario(data).subscribe(response=>{console.log(response);this.enviado=true},error=>{console.log(error);});

  }
  



}
