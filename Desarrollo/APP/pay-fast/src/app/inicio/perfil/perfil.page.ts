import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';
import { PerfiltmodalPage } from '../perfiltmodal/perfiltmodal.page';
import { PerfilatmodalPage } from '../perfilatmodal/perfilatmodal.page';
import { PerfilcmodalPage } from '../perfilcmodal/perfilcmodal.page';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private nombre: any;
  private id: any;

  constructor(private modalCtrl: ModalController, private usuarioService: UsuarioService) {
    this.id = this.usuarioService.getusuarioEdit();
    this.verUsuario();
  }

  ngOnInit() {
  }

  private promesaVerUsuario(datos: any) {
    return new Promise((resolve, reject) => {
      this.usuarioService.verUsuario(datos).subscribe((result: any) => {
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
    const usid = {
      us_i: this.id
    };

    try {
      this.nombre = await this.promesaVerUsuario(usid);
      this.nombre = this.nombre.result;
      this.nombre = this.nombre.resultado;
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

}
