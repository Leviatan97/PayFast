import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  
  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: PerfilmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    })
    await modal.present();
  }

}
