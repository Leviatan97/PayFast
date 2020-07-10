import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CustomValidators } from '../Validaciones/CustomValidators';
import { validarQueSeanIguales } from '../Validaciones/validarQueSeanIguales'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rsupermercado',
  templateUrl: './rsupermercado.page.html',
  styleUrls: ['./rsupermercado.page.scss'],
})
export class RsupermercadoPage implements OnInit {

  contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private Mensajes: any 
  private message: any = new CustomValidators()

  constructor(private toastController:ToastController) { 

    this.contactForm = this.createFormGroup();
    this.Mensajes = this.message.mensajesFormulario()

   }

  ngOnInit() {
    this.createFormGroup()
  }

  createFormGroup() {
    return new FormGroup({
      ndocumento: new FormControl('',[Validators.required, Validators.min(9999999), Validators.max(9999999999)]),
      email: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16), CustomValidators.patternValidator(/\d/, { hasNumber: true }), CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), ]),
      contrasena2: new FormControl('',[Validators.required, ]),
     },
     {
      validators: validarQueSeanIguales
     });
  }

  get ndocumento() { return this.contactForm.get('ndocumento'); }
  get email() { return this.contactForm.get('email'); }
  get contrasena() { return this.contactForm.get('contrasena'); }
  get contrasena2() { return this.contactForm.get('contrasena2'); }

  private async Rsupermercado(){

          const rsupermercado={
            nombre:this.,
            responsable:this.,
            correo:this.,
            contrasena:this.
          }
          console.log(rsupermercado)
  }


async presentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastC() 
  {
    const toast = await this.toastController.create({
      message: 'Las contraseña no coinciden',
      duration: 2000
    });
    toast.present();
  }

}
