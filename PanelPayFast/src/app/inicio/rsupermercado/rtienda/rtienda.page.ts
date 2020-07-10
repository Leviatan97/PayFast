import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CustomValidators, validarQueSeanIguales } from '../../Validaciones/CustomValidators';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-rtienda',
  templateUrl: './rtienda.page.html',
  styleUrls: ['./rtienda.page.scss'],
})
export class RtiendaPage implements OnInit {
  
  contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  private Mensajes: any 
  private message: any = new CustomValidators()

  constructor(private toastController:ToastController) {
    this.contactForm = this.createFormGroup();
    this.Mensajes = this.message.mensajesFormulario()
  }

  ngOnInit() {
  }

  onSubmitTemplate(){

  }

  createFormGroup() {
    return new FormGroup({
      supermercado: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      direccion: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      email: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
      responsable: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      ncontacto: new FormControl('',[Validators.required, Validators.min(9999999), Validators.max(9999999)]),
      coordenada: new FormControl('',[Validators.required, Validators.maxLength(50)]),
     });
  }

  get supermercado() { return this.contactForm.get('supermercado'); }
  get direccion() { return this.contactForm.get('direccion'); }
  get email() { return this.contactForm.get('email'); }
  get responsable() { return this.contactForm.get('responsable'); }
  get ncontacto() { return this.contactForm.get('ncontacto'); }
  get coordenada() { return this.contactForm.get('coordenada'); }

  private rTienda(){
    
        const rtienda={
          supermercado:this.contactForm['supermercado'],
          direccion:this.contactForm['direccion'],
          correo:this.contactForm['email'],
          responsable:this.contactForm['responsable'],
          ncontacto:this.contactForm['ncontacto'],
          coordenada:this.contactForm['coordenada']
        
  }
  }
  async presentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Asegurese de llenar los campos requeridos.',
      duration: 2000
    });
    toast.present();
  }

}
