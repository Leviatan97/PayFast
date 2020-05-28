import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario1: any;
  private usuario: any;
  private token: string = null;
  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) { }

  public validarUsuario(datos: any){
    return this.http.post('http://localhost:5000/validar', datos);
  }

  public async guardarToken(token: string) {
    if (token == undefined) {
      this.token = null
      this.storage.clear()
    }else {
      this.token = token
      await this.storage.set('token',this.token)  
    }
    
  }

  private async cargarToken() {
    this.token = await this.storage.get('token') || null
  }

  public async validarToken(): Promise<boolean> {
    await this.cargarToken()
    if(!this.token) {
      this.navCtrl.navigateRoot('/login/form-log')
      return Promise.resolve(false)
    }
    return new Promise((resolve, reject) => {
      const headers =  new HttpHeaders({
        'x-token': this.token
      })
      this.http.get('http://localhost:5000/usuario',{headers}).subscribe( resp => {
        if(resp['respuesta'] == "OK") {
          resolve(true)
        }else {
          this.navCtrl.navigateRoot('/login/form-log')
          resolve(false)
        }
      })
    })

  }
  public getusuario(){
    return this.usuario1;
  }

  public setusuario(datos: any) {
    this.usuario1 = datos;
  }

  public getusuarioEdit(){
    return this.usuario;
  }

  public setusuarioEdit(datos: any) {
    this.usuario = datos;
  }

  public registrarUsuario(datos: any) {
    return this.http.post('http://localhost:5000/Registro', datos);
  }

  public validarCorreo(datos: any) {
    return this.http.post('http://localhost:5000/correo', datos);
  }

  public validarNumeroDoc(datos: any) {
    return this.http.post('http://localhost:5000/numeroDoc', datos);
  }

  public verUsuario(datos: any) {
    return this.http.get('http://localhost:5000/usuario');
  }

  public actualizarUsuario(datos: any) {
    return this.http.put('http://localhost:5000/actualizar', datos);
  }

  public verificarContra(datos: any) {
    return this.http.post('http://localhost:5000/contra', datos);
  }

}
