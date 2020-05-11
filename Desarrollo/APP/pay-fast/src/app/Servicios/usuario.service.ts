import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario1:any

  constructor(private http: HttpClient) { }

  public validarUsuario(datos:any){
    return this.http.post('http://localhost:5000/validar',datos);
  }

  public getusuario(){
    return this.usuario1
  }

  public setusuario(datos:any){
    this.usuario1 = datos
  }

  public registrarUsuario(datos:any){
    return this.http.post('http://localhost:5000/Registro',datos);
  }

  public validarCorreo(datos : any){
    return this.http.post('http://localhost:5000/correo',datos);
  }

  public validarNumeroDoc(datos : any){
    return this.http.post('http://localhost:5000/numeroDoc',datos);
  }

  public menuOpciones(){
    return this.http.get('assets/data/menu.json');
  }

}
