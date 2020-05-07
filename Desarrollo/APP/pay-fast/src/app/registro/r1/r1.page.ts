import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.page.html',
  styleUrls: ['./r1.page.scss'],
})
export class R1Page implements OnInit {

  private nombre:String;
  private apellido:String;
  private fnacimiento:Date;
  private fecha:String;
  private tdocumento:String;

  constructor(private router : Router, private ususerv : UsuarioService, private toastController:ToastController) { }

  ngOnInit() {
  }
  
  private Registro(){
    const usuario={
      nombre:this.nombre,
      apellido:this.apellido,
      fnacimiento:this.fnacimiento,
      tdocumento:this.tdocumento
    }
    this.ususerv.setusuario(usuario)

    let result: any = null;
    try{
      if(this.nombre != undefined && this.apellido != undefined && this.fnacimiento != undefined && this.tdocumento != undefined && this.nombre != "" && this.apellido != "" &&  this.tdocumento != "")
      {
        this.router.navigate(['registro/r2'])
        console.log(this.fnacimiento)
      }
      else{
        this.presentToast();
      }
    }catch(error){
      console.log(error);
    }
    console.log(result);
   
    
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


}
