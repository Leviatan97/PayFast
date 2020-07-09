import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../Validaciones/CustomValidators';
import { validarQueSeanIguales } from '../../Validaciones/validarQueSeanIguales'

@Component({
  selector: 'app-perfilatmodal',
  templateUrl: './perfilatmodal.page.html',
  styleUrls: ['./perfilatmodal.page.scss'],
})
export class PerfilatmodalPage implements OnInit {

  contactForm: FormGroup;
  private Mensajes: any 
  private message: any = new CustomValidators()

  constructor(private modalCrtl:ModalController) {
    this.contactForm = this.createFormGroup();
    this.Mensajes = this.message.mensajesFormulario()
   }

  ngOnInit() {
  }

  private Salir(){
    this.modalCrtl.dismiss()
  }

  private Registro(){
    
  }

  createFormGroup(){
    return new FormGroup({
      tnombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tapellido: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tnumero: new FormControl('',[Validators.required, Validators.min(999999999999999), Validators.max(9999999999999999)]),
      tfvencimiento: new FormControl('',[Validators.required]),
      tcvv: new FormControl('',[Validators.required, Validators.min(99), Validators.max(999),]),
    })
  }

  get tnombre() { return this.contactForm.get('tnombre'); }
  get tapellido() { return this.contactForm.get('tapellido'); }
  get tnumero() { return this.contactForm.get('tnumero'); }
  get tfvencimiento() { return this.contactForm.get('tfvencimiento'); }
  get tcvv() { return this.contactForm.get('tcvv'); }

}
