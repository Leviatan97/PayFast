import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rsupermercado',
  templateUrl: './rsupermercado.page.html',
  styleUrls: ['./rsupermercado.page.scss'],
})
export class RsupermercadoPage implements OnInit {

  private nombre: string;
  private responsable: string;
  private correo: string;
  private contrasena: string;
  private contrasena2: string;


  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }

  private async Rsupermercado(){
    try {
      if(this.nombre != undefined && this.nombre != "" && this.responsable != undefined && this.responsable != "" && this.correo != undefined && this.correo != "" && this.contrasena != undefined && this.contrasena != "" && this.contrasena2 != undefined && this.contrasena2 != ""){
        if(this.contrasena == this.contrasena2){
          const rsupermercado={
            nombre:this.nombre,
            responsable:this.responsable,
            correo:this.correo,
            contrasena:this.contrasena
          }
          console.log(rsupermercado)
        }
        else{
          this.presentToastC();
        }
      }else{
        this.presentToast();
      }
      
    } catch (error) {
      
  }
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

}
