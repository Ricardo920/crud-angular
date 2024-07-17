import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { response } from 'express';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  id= "";
  constructor(private servicioUsuario: UsuarioService,private ruta:ActivatedRoute,private enrutador:Router){

  }
  ngOnInit(): void {
      
  }
  eliminarUsuario():void{
    this.servicioUsuario.eliminarUsuario(this.id).subscribe(response=>{console.log (response);this.enrutador.navigate(['/listado']);},error=>{console.log(error);});
  }

}
