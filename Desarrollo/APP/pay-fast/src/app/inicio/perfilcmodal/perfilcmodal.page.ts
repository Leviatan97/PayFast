import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Storage } from '@ionic/storage';
import md5 from 'md5';
import { element } from 'protractor';
import { FormGroup,  FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../Validaciones/CustomValidators';
import { validarQueSeanIguales } from '../../Validaciones/validarQueSeanIguales'

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

  contactForm: FormGroup;
  private Mensajes: any 
  private message: any = new CustomValidators()

  constructor(
    private modalCrtl: ModalController,
    private usuarioService: UsuarioService,
    private toastController: ToastController,
    private storage: Storage
  ) {
    this.id = this.usuarioService.getusuarioEdit();
    // this.contactForm = this.createFormGroup();
    this.Mensajes = this.message.mensajesFormulario()
   }

  ngOnInit() {
    //this.createFormGroup()
  }

  private Salir(){
    this.modalCrtl.dismiss();
  }

  private PromesaContra(datos: any, tok: string) {
    return new Promise((resolve, reject) => {
      this.usuarioService.verificarContra(datos, tok).subscribe((result: any) => {
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

  private PromesaActualizar(datos: any, token: string) {
    return new Promise((resolve, reject) => {
      this.usuarioService.actualizarUsuario(datos, token).subscribe((result: any) => {
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
    let token: string = null
    try {
      token = await this.storage.get('token') || null
      valida = this.validarCampos();
      if(valida == true) {
        const contraencrip: any = md5(this.contrasenaA);
        const contrasena = {
          us_ca: contraencrip
        };
        result = await this.PromesaContra(contrasena, token);
        result = result.result;
        if(result.val === 1){
          if(this.contrasena === this.contrasenaO) {
            const contra: any =  md5(this.contrasena);
            const datos = {
              us_i:  this.id,
              us_ca: contra
            };
            result2 = await this.PromesaActualizar(datos,token);
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

  // createFormGroup() {
  //   return new FormGroup({
  //     contrasenaA: new FormControl('',[Validators.required]),
  //     contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16), CustomValidators.patternValidator(/\d/, { hasNumber: true }), CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), ]),
  //     contrasena2: new FormControl('',[Validators.required, ]),
  //    },
  //    {
  //     validators: validarQueSeanIguales
  //    });
  // }
  // get contrasenaA() { return this.contactForm.get('contrasenaA') }
  // get contrasena() { return this.contactForm.get('contrasena'); }
  // get contrasena2() { return this.contactForm.get('contrasena2'); }

  // checarSiSonIguales(): boolean {
  //   return this.contactForm.hasError('noSonIguales') &&
  //     this.contactForm.get('contrasena').dirty &&
  //     this.contactForm.get('contrasena2').dirty;
  // }

  // Mayuscula(){
  //  return this.contactForm.controls['contrasena'].hasError('hasCapitalCase') ?  true : false
  // }

}
