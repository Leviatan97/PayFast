import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  // genders: Array<string>;

  contactForm: FormGroup;

  private Remail:string;
  private Rcontrasena:string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { 
    this.contactForm = this.createFormGroup();
    console.log(this.contactForm)
  }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(this.emailPattern)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }
  get email() { return this.contactForm.get('email'); }
  get contrasena() { return this.contactForm.get('contrasena'); }

  ngOnInit() {
  }

  onSubmit() {
  }

  Registro(){
    const usuarios={
      email: this.contactForm.value['email'],
      contrasena: this.contactForm.value['contrasena']

    }
    console.log(usuarios)
  }

}
