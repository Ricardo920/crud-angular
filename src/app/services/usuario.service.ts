import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
// esta url referencia al back
const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}/listado`);
  }
  buscarPorDocumento(documento: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}/listado?documento=${documento}`);
  }
  agregarUsuario(data: any):Observable<any>{
    return this.http.post<any>(`${baseUrl}/agregar`,data).pipe(map(usuario=>{JSON.stringify(usuario);return usuario}));
  }
  eliminarUsuario(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/eliminar/${id}`);
  }



}
