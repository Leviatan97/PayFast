import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';
import { PerfiltmodalPage } from '../perfiltmodal/perfiltmodal.page';
import { PerfilatmodalPage } from '../perfilatmodal/perfilatmodal.page';
import { PerfilcmodalPage } from '../perfilcmodal/perfilcmodal.page';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private nombre: any;

  constructor(
    private modalCtrl: ModalController, 
    private usuarioService: UsuarioService,
    private storage: Storage,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.verUsuario();
  }

  ngOnInit() {
  }

  private promesaVerUsuario(token: string) {
    return new Promise((resolve, reject) => {
      this.usuarioService.verUsuario(token).subscribe((result: any) => {
        resolve({
          result, resultado: 'ok'
        })
      },(error: object) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }

  private async verUsuario() {
    let token: string = null
    try {
      token = await this.storage.get('token') || null
      this.nombre = await this.promesaVerUsuario(token);
      this.nombre = this.nombre.result
      this.nombre = this.nombre.resultado
      return this.nombre
    } catch (error) {
      console.log(error);
    }
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: PerfilmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    });
    await modal.present();
  }

  async abrirModalT() {
    const modal = await this.modalCtrl.create({
      component: PerfiltmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    });
    await modal.present();
  }

  async abrirModalA() {
    const modal = await this.modalCtrl.create({
      component: PerfilatmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    });
    await modal.present();
  }

  async abrirModalC() {
    const modal = await this.modalCtrl.create({
      component: PerfilcmodalPage,
      componentProps: {
        Nombre: 'Cesar',
        Apellido: 'Gonzalez'
      }
    });
    await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
