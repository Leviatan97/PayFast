import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfilmodal',
  templateUrl: './perfilmodal.page.html',
  styleUrls: ['./perfilmodal.page.scss'],
})
export class PerfilmodalPage implements OnInit {

  contactForm: FormGroup;
  private datos: any;
  private id: any;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private modalCtrl: ModalController,
    private usuarioServie: UsuarioService,
    private toastController: ToastController,
    private storage: Storage
  ) {
    this.verUsuario();
    this.contactForm = this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      apellido: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      fnacimiento: new FormControl('',[Validators.required,]),
      tdocumento: new FormControl('',[Validators.required]),
      ndocumento: new FormControl('',[Validators.required, Validators.min(9999999), Validators.max(9999999999)]),
      email: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
    })
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get apellido() { return this.contactForm.get('apellido'); }
  get fnacimiento() { return this.contactForm.get('fnacimiento'); }
  get tdocumento() { return this.contactForm.get('tdocumento'); }
  get ndocumento() { return this.contactForm.get('ndocumento'); }
  get email() { return this.contactForm.get('email'); }
  
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
      this.nombre.setValue(this.datos[0].us_n)
      this.apellido.setValue(this.datos[0].us_a)
      this.fnacimiento.setValue(this.datos[0].us_fn)
      this.tdocumento.setValue(this.datos[0].us_td)
      this.ndocumento.setValue(this.datos[0].us_nd)
      this.email.setValue(this.datos[0].us_c)
    } catch (error) {
      console.log(error);
    }
  }

  private async editarDatos() {
    let result: any = null;
    let token: string = null;
    let validar: any
    const usuario = {
      us_n:this.contactForm.value['nombre'],
      us_a:this.contactForm.value['apellido'],
      us_fn:this.contactForm.value['fnacimiento'],
      us_td:this.contactForm.value['tdocumento'],
      us_nd:this.contactForm.value['ndocumento'],
      us_c:this.contactForm.value['email']
    }

    try {
      token = await this.storage.get('token') || null
      validar = this.validarDatos()
      if(validar) {
        result = await this.promesaActualizarUsuario(usuario, token);
        this.editar();
        this.modalCtrl.dismiss();
      }
    } catch (error) {
      console.log(error);
    }
  }

  private validarDatos() {
    let validar: boolean = true
    if(
      this.contactForm.value['nombre'] == this.datos[0].us_n && 
      this.contactForm.value['apellido'] == this.datos[0].us_a && 
      this.contactForm.value['fnacimiento'] == this.datos[0].us_fn && 
      this.contactForm.value['tdocumento'] == this.datos[0].us_td && 
      this.contactForm.value['ndocumento'] == this.datos[0].us_nd && 
      this.contactForm.value['email'] == this.datos[0].us_c
    ) {
      validar = false
    }
    return validar
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
