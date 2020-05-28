import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import md5 from 'md5';
import { element } from 'protractor';

@Component({
  selector: 'app-perfilcmodal',
  templateUrl: './perfilcmodal.page.html',
  styleUrls: ['./perfilcmodal.page.scss'],
})
export class PerfilcmodalPage implements OnInit {

  private contrasenaA: any;
  private contrasena: any;
  private contrasenaO: any;
  private id: any;

  constructor(
    private modalCrtl: ModalController,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) {
    this.id = this.usuarioService.getusuarioEdit();
   }

  ngOnInit() {
  }

  private Salir(){
    this.modalCrtl.dismiss();
  }

  private PromesaContra(datos: any) {
    return new Promise((resolve, reject) => {
      this.usuarioService.verificarContra(datos).subscribe((result: any) => {
        resolve({
          result,
          respuesta: 'OK'
        });
      }, (error: any) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }

  private PromesaActualizar(datos: any) {
    return new Promise((resolve, reject) => {
      this.usuarioService.actualizarUsuario(datos).subscribe((result: any) => {
        resolve({
          result,
          respuesta: 'OK'
        });
      }, (error: any) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }
  private validarCampos(){
    if(this.contrasenaA !== undefined && this.contrasenaA !== '' && this.contrasena !== '' && this.contrasenaO !== '' && this.contrasena !== undefined && this.contrasenaO !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  private async verficarContra() {
    let result: any = null;
    let result2: any = null;
    let valida: any = null;
    try {

      valida = this.validarCampos();
      if(valida == true) {
        const contraencrip: any = md5(this.contrasenaA);
        const contrasena = {
          us_i:  this.id,
          us_ca: contraencrip
        };
        result = await this.PromesaContra(contrasena);
        result = result.result;
        if(result.val === 1){
          if(this.contrasena === this.contrasenaO) {
            const contra: any =  md5(this.contrasena);
            const datos = {
              us_i:  this.id,
              us_ca: contra
            };
            result2 = await this.PromesaActualizar(datos);
            this.actualizar();
            this.modalCrtl.dismiss();
          } else {
            this.ContraT()
          }
        } else {
          this.verificaContraT();
        }
      } else {
        this.contrasenas();
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async verificaContraT() {
    const toast = await this.toastController.create({
      message: 'La contraseña actual no coincide.',
      duration: 2000
    });
    toast.present();
  }

  async contrasenas() {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

  async ContraT() {
    const toast = await this.toastController.create({
      message: 'Las contraseñas no coinciden.',
      duration: 2000
    });
    toast.present();
  }

  async actualizar() {
    const toast = await this.toastController.create({
      message: 'Se ha actualizado la contraseña.',
      duration: 2000
    });
    toast.present();
  }



}
