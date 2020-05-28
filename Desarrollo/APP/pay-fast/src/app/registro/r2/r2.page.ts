import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular/directives/navigation/nav-params';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { NavController, ToastController, MenuController } from '@ionic/angular';
import md5 from 'md5';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.page.html',
  styleUrls: ['./r2.page.scss'],
})
export class R2Page implements OnInit {
  
  private usuario :any;

  private ndocumento:String;
  private email:String;
  private contrasena:String;
  private contrasena2:String;
  

  constructor(
    private router : Router, 
    private ususer : UsuarioService, 
    private toastController:ToastController,
    private menu : MenuController
  ) 
  {
    this.usuario = ususer.getusuario()
    this.menu.enable(false)    
  }

  ngOnInit() {
  }
  private async Registro(){  
      
    let correo : any = null;
    let numeroDoc: any = null;
    let uscor: any = null 
    let Numdoc: any = null

    try{
      if(this.ndocumento != undefined && this.email != undefined && this.contrasena != undefined  && this.ndocumento != "" && this.email != "" &&  this.contrasena != "")
      {
        if(this.contrasena == this.contrasena2){

          uscor = {
            us_c : String(this.email)
          }

          Numdoc = {
            us_nd : String(this.ndocumento)
          }

          correo = await this.PromesaCorreo(uscor)
          numeroDoc = await this.PromesaTCedula(Numdoc)
          
          correo = correo.result
          numeroDoc = numeroDoc.result
          
          if(numeroDoc.val == 0){

              if(correo.val == 0){
                const contraenc = md5(this.contrasena)
                const usu = {
                  us_n : this.usuario.us_n,
                  us_a : this.usuario.us_a,
                  us_fn : this.usuario.us_fn,
                  us_td : this.usuario.us_td,
                  us_nd : String(this.ndocumento),
                  us_c : this.email,
                  us_ca : contraenc,
                  us_im: "default.svg"
                }

                  this.router.navigate(['/registro/r3'])
                  this.ususer.setusuario(usu)

              }else{
                this.validarCorreo()
              }
              
          }else{
            this.ValidarCedula()
          }
          
        }else{
          this.presentToastC();
        }
        
      }
      else{
        this.presentToast();
      }
    }catch(error){
      console.log(error);
    } 
  }

  private PromesaCorreo(usu : any){
    return new Promise((resolve,reject)=>{
      this.ususer.validarCorreo(usu).subscribe((result:any)=>{
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

  private PromesaTCedula(usu : any){
    return new Promise((resolve,reject)=>{
      this.ususer.validarNumeroDoc(usu).subscribe((result:any)=>{
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

  private Login(){
    this.router.navigate(['login/form-log'])
  }

  private Back(){
    this.router.navigate(['registro/r1'])
  }

  async presentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastC() 
  {
    const toast = await this.toastController.create({
      message: 'Las contraseña no coinciden',
      duration: 2000
    });
    toast.present();
  }

  async validarCorreo() 
  {
    const toast = await this.toastController.create({
      message: 'Este correo ya esta Registrado',
      duration: 2000
    });
    toast.present();
  }

  async ValidarCedula() 
  {
    const toast = await this.toastController.create({
      message: 'El numero de documento ya esta registrado',
      duration: 2000
    });
    toast.present();
  }
}
