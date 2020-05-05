import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  )
  {

  }

  public validarUsuario(datos:any){
    return this.http.post('http://localhost:5000/validar',datos);
  }

}
