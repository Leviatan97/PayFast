import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular/directives/navigation/nav-params';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { NavController, ToastController } from '@ionic/angular';

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
  

  constructor(private router : Router, private ususer : UsuarioService, private toastController:ToastController) {
    this.usuario = ususer.getusuario()
    
  }

  ngOnInit() {
  }
  private async Registro(){
    const usu = {
      nombre : this.usuario.nombre,
      apellido : this.usuario.apellido,
      fnacimiento : this.usuario.fnacimiento,
      tdocumento : this.usuario.tdocumento,
      ndocumento : String(this.ndocumento),
      email : this.email,
      contrasena : this.contrasena
    }
    
    
    let correo : any = null;
    let result: any = null;
    let numeroDoc: any = null;

    try{
      if(this.ndocumento != undefined && this.email != undefined && this.contrasena != undefined  && this.ndocumento != "" && this.email != "" &&  this.contrasena != "")
      {
        if(this.contrasena == this.contrasena2){
          correo = await this.PromesaCorreo(this.email)
          numeroDoc = await this.PromesaTCedula(String(this.ndocumento))

          console.log(correo)
          console.log(numeroDoc)
          // if(correo.result.val == 0){

          //     numeroDoc = this.PromesaTCedula(this.ndocumento)

          //     if(numeroDoc.result.val == 0){

          //         this.router.navigate(['/registro/r3'])
          //         this.ususer.setusuario(usu)
          //         console.log('ok')

          //     }else{
          //       this.ValidarCedula()
          //     }
              
          // }else{
          //   this.validarCorreo()
          // }
          
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
    console.log(result);
    
    


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
      message: 'Este numero de Documento ya esta',
      duration: 2000
    });
    toast.present();
  }
}
