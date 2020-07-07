import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, MenuController, IonSlides } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.page.html',
  styleUrls: ['./r1.page.scss'],
})
export class R1Page implements OnInit {

  @ViewChild("slide",{static: true}) slides:IonSlides;

  contactForm: FormGroup;
  contactForm2: FormGroup; 
  contactForm3: FormGroup; 

  // private nombre:String;
  // private apellido:String;
  // private fnacimiento:Date;
  // private fecha:String;
  // private tdocumento:String;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private router : Router, 
    private ususerv : UsuarioService, 
    private toastController:ToastController,
    private menu: MenuController
  ) 
  {
    this.menu.enable(false)
    this.contactForm = this.createFormGroup();
    this.contactForm2 = this.createFormGroup2();
    this.contactForm3 = this.createFormGroup3();
  }

  ngOnInit() {
    this.slides.lockSwipes(true)
  }
  
  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      apellido: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      fnacimiento: new FormControl('',[Validators.required,]),
      tdocumento: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    })
  }

  createFormGroup2(){
    return new FormGroup({
      ndocumento: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10),]),
      email: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16),]),
      contrasena2: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16),]),
    })
  }

  createFormGroup3(){
    return new FormGroup({
      tnombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tapellido: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tnumero: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16),]),
      tfvencimiento: new FormControl('',[Validators.required]),
      tcvv: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3),]),
    })
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get apellido() { return this.contactForm.get('apellido'); }
  get fnacimiento() { return this.contactForm.get('fnacimiento'); }
  get tdocumento() { return this.contactForm.get ('tdocumento') }
  
  get ndocumento() { return this.contactForm2.get('ndocumento'); }
  get email() { return this.contactForm2.get('email'); }
  get contrasena() { return this.contactForm2.get('contrasena'); }
  get contrasena2() { return this.contactForm2.get('contrasena2'); }
  
  get tnombre() { return this.contactForm3.get('tnombre'); }
  get tapellido() { return this.contactForm3.get('tapellido'); }
  get tnumero() { return this.contactForm3.get('tnumero'); }
  get tfvencimiento() { return this.contactForm3.get('tfvencimiento'); }
  get tcvv() { return this.contactForm3.get('tcvv'); }


  private Registro(){
    const usuario={
      us_n:this.contactForm.value['nombre'],
      us_a:this.contactForm.value['apellido'],
      us_fn:this.contactForm.value['fnacimiento'],
      us_td:this.contactForm.value['tdocumento'],
      
      us_nd:this.contactForm2.value['ndocumento'],
      us_c:this.contactForm2.value['email'],
      us_ca:this.contactForm2.value['contrasena'],
      us_im:this.contactForm2.value['contrasena2'],
    }
    console.log(usuario)
  }


  private Next1(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)
  } 
  private Next2(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(2)
  }
  private Login(){
    this.router.navigate(['login/form-log'])
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
