import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, MenuController, IonSlides } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../Validaciones/CustomValidators';
import { validarQueSeanIguales } from '../../Validaciones/validarQueSeanIguales'
import md5 from 'md5';

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
    this.createFormGroup2()
  }

  private PromesaUsuRegistrar(datos : any){
    return new Promise((resolve,reject)=>{
      this.ususerv.registrarUsuario(datos).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  private PromesaCorreo(usu : any){
    return new Promise((resolve,reject)=>{
      this.ususerv.validarCorreo(usu).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  private PromesaTCedula(usu : any){
    return new Promise((resolve,reject)=>{
      this.ususerv.validarNumeroDoc(usu).subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }
  
  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      apellido: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      fnacimiento: new FormControl('',[Validators.required,]),
      tdocumento: new FormControl('',[Validators.required]),
    })
  }

  createFormGroup2() {
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

  createFormGroup3(){
    return new FormGroup({
      tnombre: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tapellido: new FormControl('',[Validators.required, Validators.maxLength(50),]),
      tnumero: new FormControl('',[Validators.required, Validators.min(999999999999999), Validators.max(9999999999999999)]),
      tfvencimiento: new FormControl('',[Validators.required]),
      tcvv: new FormControl('',[Validators.required, Validators.min(99), Validators.max(999),]),
      check: new FormControl('',[Validators.requiredTrue]),
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
  get check() { return this.contactForm3.get('check'); }


  private async Registro(){
    const contraenc = md5(this.contactForm2.value['contrasena'])
    const usuario = {
      us_n:this.contactForm.value['nombre'],
      us_a:this.contactForm.value['apellido'],
      us_fn:this.contactForm.value['fnacimiento'],
      us_td:this.contactForm.value['tdocumento'],
      
      us_nd:this.contactForm2.value['ndocumento'],
      us_c:this.contactForm2.value['email'],
      us_ca:contraenc,
      us_im:"default.svg",
    }
    let resultado: any

    try {
      resultado = await this.PromesaUsuRegistrar(usuario)
      resultado = resultado.result
      this.ususerv.guardarToken(resultado.token)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  private async documento() {
    let doc: any;
    let numDoc: any = {
      us_nd: this.contactForm2.value['ndocumento']
    }

    try {
      doc = await this.PromesaTCedula(numDoc)
      doc = doc.result
      if(doc.val == 0) {
        return false
      } else {
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }

  private async correo() {
    let eal: any;
    let email: any = {
      us_c: this.contactForm2.value['email']
    }

    try {
      eal = await this.PromesaCorreo(email)
      eal = eal.result
      if(eal.val == 0) {
        return false
      } else {
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }
  private Next1(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    //this.slides.lockSwipes(true);
  } 
  private async Next2(){
    let resultado = await this.documento();
    if(resultado) {
      this.documentoToast()
    } else {
      resultado = await this.correo()
      if(resultado) {
        this.correoToast()
      }else {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
      }
    }
    //this.slides.lockSwipes(true);
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }
  private Registrarse(){
    this.router.navigate(['registro/r1'])
  }
  checarSiSonIguales(): boolean {
    return this.contactForm2.hasError('noSonIguales') &&
      this.contactForm2.get('contrasena').dirty &&
      this.contactForm2.get('contrasena2').dirty;
  }

  Mayuscula(){
   return this.contactForm2.controls['contrasena'].hasError('hasCapitalCase') ?  true : false
  }

  private tyc(){
    this.router.navigate(['tyc/home-tyc'])
  }

  private async Inicio(){
    let respuesta = await this.Registro()
    if(respuesta) {
      this.registradoToast()
      this.router.navigate(['/tutorial/home-tut'])
    }else {
      this.registroToast()
    }
    
  }

  async documentoToast() 
  {
    const toast = await this.toastController.create({
      message: 'El numero de documento ya esta registrado.',
      duration: 2000
    });
    toast.present();
  }
  
  async correoToast() 
  {
    const toast = await this.toastController.create({
      message: 'El correo electronico ya esta registrado.',
      duration: 2000
    });
    toast.present();
  }

  async registroToast() 
  {
    const toast = await this.toastController.create({
      message: 'Error, no se pudo registrar.',
      duration: 2000
    });
    toast.present();
  }

  async registradoToast() 
  {
    const toast = await this.toastController.create({
      message: 'Se ha registrado exitosamente.',
      duration: 2000
    });
    toast.present();
  }
}