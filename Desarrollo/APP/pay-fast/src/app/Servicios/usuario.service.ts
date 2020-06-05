import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario1: any;
  private usuario: any;
  private token: string = null;
  constructor(
    private http: HttpClient, 
    private storage: Storage, 
    private navCtrl: NavController, 
    private filetrnasfer: FileTransfer
  ) { }

  public validarUsuario(datos: any){
    return this.http.post(`${URL}/validar`, datos);
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
      this.http.get(`${URL}/usuario`,{headers}).subscribe( resp => {
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
    return this.http.post(`${URL}/Registro`, datos);
  }

  public validarCorreo(datos: any) {
    return this.http.post(`${URL}/correo`, datos);
  }

  public validarNumeroDoc(datos: any) {
    return this.http.post(`${URL}/numeroDoc`, datos);
  }
  
  public verUsuario(tok: string) {
    const headers =  new HttpHeaders({
      'x-token': tok
    })
    return this.http.get(`${URL}/usuario`, {headers});
  }

  public actualizarUsuario(datos: any, tok:string) {
    const headers =  new HttpHeaders({
      'x-token': tok
    })
    return this.http.put(`${URL}`, datos,{headers});
  }

  public verificarContra(datos: any, tok: string) {
    const headers =  new HttpHeaders({
      'x-token': tok
    })
    return this.http.post(`${URL}/contra`, datos, {headers});
  }

  public subirFoto (img: string, tok: string) {
    const opciones: FileUploadOptions = {
      fileKey: 'imagen',
      headers: {
        'x-token': tok
      }
    }

    const fileTransfer: FileTransferObject = this.filetrnasfer.create()
    fileTransfer.upload(img,`${URL}/fotoPerfil`, opciones).then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }
}
