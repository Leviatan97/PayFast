import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-rtienda',
  templateUrl: './rtienda.page.html',
  styleUrls: ['./rtienda.page.scss'],
})
export class RtiendaPage implements OnInit {
  


  private supermercado:string;
  private direccion:string;
  private correo:string;
  private responsable:string;
  private ncontacto:string;
  private coordenada:string;
  

  constructor(private toastController:ToastController) {
    
  }

  ngOnInit() {
  }

  onSubmitTemplate(){

  }

  private rTienda(){
    try {
      if(this.supermercado != undefined && this.supermercado != "" && this.direccion != undefined && this.direccion != "" && this.correo != undefined && this.correo != "" && this.responsable != undefined && this.responsable != "" && this.ncontacto != undefined && this.ncontacto != "" && this.coordenada != undefined && this.coordenada != ""){
        const rtienda={
          supermercado:this.supermercado,
          direccion:this.direccion,
          correo:this.correo,
          responsable:this.responsable,
          ncontacto:this.ncontacto,
          coordenada:this.coordenada
        }
        console.log(rtienda)
      }
      else{
        this.presentToast()
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

}
