import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CustomValidators, validarQueSeanIguales } from '../Validaciones/CustomValidators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private toastController:ToastController, private router : Router, ) { 

    this.contactForm = this.createFormGroup();
    this.Mensajes = this.message.mensajesFormulario()

   }

  ngOnInit() {
    this.createFormGroup()
  }

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      responsable: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      email: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16), CustomValidators.patternValidator(/\d/, { hasNumber: true }), CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), ]),
      contrasena2: new FormControl('',[Validators.required, ]),
     },
     {
      validators: validarQueSeanIguales
     });
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get responsable() { return this.contactForm.get('responsable'); }
  get email() { return this.contactForm.get('email'); }
  get contrasena() { return this.contactForm.get('contrasena'); }
  get contrasena2() { return this.contactForm.get('contrasena2'); }

  private async Rsupermercado(){

          const rsupermercado={
            nombre:this.contactForm.value['nombre'],
            responsable:this.contactForm.value['responsable'],
            email:this.contactForm.value['email'],
            correo:this.contactForm.value['contrasena'],
            contrasena:this.contactForm.value['contrasena2']
          }
          console.log(rsupermercado)
          this.router.navigate(['/inicio/rsupermercado/rtienda'])
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
  checarSiSonIguales(): boolean {
    return this.contactForm.hasError('noSonIguales') &&
      this.contactForm.get('contrasena').dirty &&
      this.contactForm.get('contrasena2').dirty;
  }

  Mayuscula(){
    return this.contactForm.controls['contrasena'].hasError('hasCapitalCase') ?  true : false
   }

}
