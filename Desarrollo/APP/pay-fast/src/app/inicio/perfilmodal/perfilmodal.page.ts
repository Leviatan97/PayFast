import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

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
    private usuarioServie: UsuarioService
  ) {
    this.id = this.usuarioServie.getusuarioEdit();
    this.verUsuario();
  }

  ngOnInit() {
  }
  private Salir() {
    this.modalCtrl.dismiss();
  }

  private promesaVerUsuario(datos: any) {
    return new Promise((resolve, reject) => {
      this.usuarioServie.verUsuario(datos).subscribe((result: any) => {
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
    const usid = {
      us_i: this.id
    };

    try {
      this.datos = await this.promesaVerUsuario(usid);
      this.datos = this.datos.result;
      this.datos = this.datos.resultado;
    } catch (error) {
      console.log(error);
    }
  }

  private editarDatos() {
    console.log(this.datos);
  }

}
