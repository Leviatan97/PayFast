import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { TarjetaService } from 'src/app/Servicios/tarjeta.service';
import { NavController, ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.page.html',
  styleUrls: ['./r3.page.scss'],
})
export class R3Page implements OnInit {

  private tnombre:String;
  private tapellido:String;
  private tnumero:String;
  private tfvencimiento:Date;
  private tcvv:String;
  private check:boolean;
  
  private usu1:any

  constructor(
    private router : Router, 
    private usuario:UsuarioService, 
    private tarjetaServicio:TarjetaService, 
    private toastController:ToastController,
    private menu : MenuController
  ) 
  {
      this.usu1 = this.usuario.getusuario()
      this.menu.enable(false)
  }
   
  ngOnInit() {
  }
  private PromesaUsuRegistrar(datos : any){
    return new Promise((resolve,reject)=>{
      this.usuario.registrarUsuario(datos).subscribe((result:any)=>{
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

  private PromesaTarjeRegistrar(datos : any){
    return new Promise((resolve,reject)=>{
      this.tarjetaServicio.registrarTarjeta(datos).subscribe((result:any)=>{
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

  private async Inicio(){

    const tarjeta ={
      tnombre:this.tnombre,
      tapellido:this.tapellido,
      tnumero:this.tnumero,
      tfvencimiento:this.tfvencimiento,
      tcvv:this.tcvv
    }
    let result : any = null
    let result2 : any = null
    
    try {
      if(this.tnombre != undefined && this.tapellido != undefined && this.tnumero != undefined && this.tfvencimiento != undefined && this.tcvv != undefined && this.tnombre != "" && this.tapellido != "" && this.tnumero != "" && this.tcvv != ""){
        
        if(this.check == false || this.check == undefined){
          this.presentToastTyC();
          console.log(this.check)
        }
        else{
          result = await this.PromesaUsuRegistrar(this.usu1)
          result2 = await this.PromesaTarjeRegistrar(tarjeta)
          result = result.result
          result = result.res
          result = result.respuesta
          this.usuario.setusuarioEdit(result.insertId)
          this.router.navigate(['/tutorial/home-tut'])
        
          console.log(result)
        }
      }else{
        this.presentToast(); 
      }
    } catch (error) {
      console.log(error)
    }
  }

  private Login(){
    this.router.navigate(['login/form-log'])
  }

  private tyc(){
    this.router.navigate(['tyc/home-tyc'])
  }

  async presentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }
  async presentToastTyC() 
  {
    const toast = await this.toastController.create({
      message: 'Debe aceptar los terminos y condiciones',
      duration: 2000
    });
    toast.present();
  }
  

}
