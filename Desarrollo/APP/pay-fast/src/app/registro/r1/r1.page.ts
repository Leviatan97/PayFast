import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, MenuController } from '@ionic/angular';
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

  constructor(
    private router : Router, 
    private ususerv : UsuarioService, 
    private toastController:ToastController,
    private menu: MenuController
  ) 
  {
    this.menu.enable(false)
  }

  ngOnInit() {
  }
  
  private Registro(){
    const usuario={
      us_n:this.nombre,
      us_a:this.apellido,
      us_fn:this.fnacimiento,
      us_td:this.tdocumento
    }
    
    try{
      if(this.nombre != undefined && this.apellido != undefined && this.fnacimiento != undefined && this.tdocumento != undefined && this.nombre != "" && this.apellido != "" &&  this.tdocumento != "")
      {
        this.ususerv.setusuario(usuario)
        this.router.navigate(['registro/r2'])
      }
      else{
        this.presentToast();
      }
    }catch(error){
      console.log(error);
    }
  }


  private Login(){
    this.router.navigate(['login/form-log'])
  }

  private Back(){
    this.router.navigate(['/'])
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
