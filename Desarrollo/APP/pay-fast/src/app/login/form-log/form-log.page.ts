import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Servicios/usuario.service'
import md5 from 'md5'

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.page.html',
  styleUrls: ['./form-log.page.scss'],
})
export class FormLogPage implements OnInit {
  
  private correo: string;
  private contrasena: string;

  constructor(
    private router: Router,
    private usuarioservice: UsuarioService
  )
  {

  }

  ngOnInit() {
  }

  private PromesaUsuValidar(datos : any){
    return new Promise((resolve,reject)=>{
      this.usuarioservice.validarUsuario(datos).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  
  private async ValidarUsu(){
    const conencrip = md5(this.contrasena) 
    const datosUsuario = {
      us_c : this.correo, 
      us_ca : conencrip
    }

    let result: any = null;
    try{
      result = await this.PromesaUsuValidar(datosUsuario)
    }catch(error){
      console.log(error);
    }

    console.log(result);

  }

  private registrarse(){
    this.router.navigate(['registro/r1'])
  }



  

}
