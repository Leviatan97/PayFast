import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';
import { PerfiltmodalPage } from '../perfiltmodal/perfiltmodal.page';
import { PerfilatmodalPage } from '../perfilatmodal/perfilatmodal.page';
import { PerfilcmodalPage } from '../perfilcmodal/perfilcmodal.page';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private nombre: any;
  private imagen: any;
  constructor(
    private modalCtrl: ModalController, 
    private usuarioService: UsuarioService,
    private storage: Storage,
    private actionSheetCtrl: ActionSheetController,
    private camara: Camera
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
      header: 'Editar Foto de Perfil',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Tomar Foto',
        icon: 'camera',
        handler: () => {
          this.abrirCamara();
        }
      }, {
        text: 'Subir imagen',
        icon: 'image-outline',
        handler: () => {
          this.abrirGaleria();
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

  private async abrirCamara() {
    let token: string = null
    token = await this.storage.get('token') || null
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camara.DestinationType.FILE_URI,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camara.PictureSourceType.CAMERA
    }
    
    this.camara.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.usuarioService.subirFoto(imageData, token)
    }, (err) => {
     // Handle error
    });
  }

  private async abrirGaleria() {
    let token: string = null
    token = await this.storage.get('token') || null
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camara.DestinationType.FILE_URI,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camara.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.usuarioService.subirFoto(imageData, token)
    }, (err) => {
     // Handle error
    });
  }

}
