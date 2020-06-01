import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfilmodal',
  templateUrl: './perfilmodal.page.html',
  styleUrls: ['./perfilmodal.page.scss'],
})
export class PerfilmodalPage implements OnInit {

  private datos: any;
  private id: any;

  constructor(
    private modalCtrl: ModalController,
    private usuarioServie: UsuarioService,
    private toastController: ToastController,
    private storage: Storage
  ) {
    this.verUsuario();
  }

  ngOnInit() {
  }
  private Salir() {
    this.modalCtrl.dismiss();
  }

  private promesaVerUsuario(token: string) {
    return new Promise((resolve, reject) => {
      this.usuarioServie.verUsuario(token).subscribe((result: any) => {
        resolve({
          result, resultado: 'ok'
        });
      }, (error: object) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }

  private promesaActualizarUsuario(datos: any, token: string) {
    return new Promise((resolve, reject) => {
      this.usuarioServie.actualizarUsuario(datos, token).subscribe((result: any) => {
        resolve({
          result, resultado: 'ok'
        });
      }, (error: object) => {
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
      this.datos = await this.promesaVerUsuario(token);
      this.datos = this.datos.result
      this.datos = this.datos.resultado
    } catch (error) {
      console.log(error);
    }
  }

  private async editarDatos() {
    let result: any = null;
    let token: string = null;
    try {
      token = await this.storage.get('token') || null
      if(this.datos[0].us_n !== '' && this.datos[0].us_a !== '' && this.datos[0].us_nd !== null && this.datos[0].us_c !== '') {
        result = await this.promesaActualizarUsuario(this.datos[0], token);
        this.editar();
        this.modalCtrl.dismiss();
      } else {
        this.validarCampos();
      }

    } catch (error) {
      console.log(error);
    }
  }

  async validarCampos() {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

  async editar() {
    const toast = await this.toastController.create({
      message: 'Los datos fueron actualizados exitosamente.',
      duration: 1500
    });
    toast.present();
  }

}
