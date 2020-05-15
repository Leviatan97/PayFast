import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';
import { PerfiltmodalPage } from '../perfiltmodal/perfiltmodal.page';
import { PerfilatmodalPage } from '../perfilatmodal/perfilatmodal.page';
import { PerfilcmodalPage } from '../perfilcmodal/perfilcmodal.page';

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

  async abrirModalT(){
    const modal = await this.modalCtrl.create({
      component: PerfiltmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    })
    await modal.present();
  }

  async abrirModalA(){
    const modal = await this.modalCtrl.create({
      component: PerfilatmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    })
    await modal.present();
  }

  async abrirModalC(){
    const modal = await this.modalCtrl.create({
      component: PerfilcmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    })
    await modal.present();
  }

}
