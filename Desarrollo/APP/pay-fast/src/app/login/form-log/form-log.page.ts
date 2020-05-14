import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Servicios/usuario.service'
import md5 from 'md5'
import { ToastController, MenuController } from '@ionic/angular';


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
    private usuarioservice: UsuarioService,
    public toastController: ToastController,
    private menu: MenuController
  )
  {
    this.menu.enable(false)
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
     

    let result: any = null;

    try{
      if(this.correo != undefined && this.contrasena != undefined && this.correo != "")
      {
        if(this.correo != null && this.contrasena)
        {
          const conencrip = md5(this.contrasena)
          const datosUsuario = {
            us_c : this.correo, 
            us_ca : conencrip
          }
          result = await this.PromesaUsuValidar(datosUsuario)
          result = result.result
          this.usuarioservice.setusuarioEdit(result.resultado)
          if(result.val == 1){
            this.router.navigate(['/inicio/i1'])
          }else{
            this.usuarioContra()
          }
          
        }else
        {
          this.presentToast();
        }
      }
      else{
        this.presentToast();
      }
    }catch(error){
      console.log(error);
    }
    
  }

  private registrarse(){
    this.router.navigate(['registro/r1'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

  async usuarioContra() {
    const toast = await this.toastController.create({
      message: 'El usuario o la contraseña son incorrectos.',
      duration: 2000
    });
    toast.present();
  }

  

}
