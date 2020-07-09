import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';


export class CustomValidators implements OnInit {

    ngOnInit(): void {
    }
    constructor(){
    }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null;
          }
      
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null : error;
        };
      }
    
      static passwordMatchValidator(control: AbstractControl) {
        const contrasena: string = control.get('contrasena').value; // get password from our password form control
        const contrasena2: string = control.get('contrasena2').value; // get password from our confirmPassword form control
        // compare is the password math
        if (contrasena !== contrasena2) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('contrasena2').setErrors({ NoPassswordMatch: true });
        }
      }
      

      public mensajesFormulario(){
        const Mensajes: any = {
          mrequerido: 'Este campo es requerido',
          mmaxcicuenta: 'Máximo 50 caracteres',
          mminocho: 'Mínimo 8 dígitos',
          mmaxdiez: 'Máximo 10 digitos',
          memail: 'Verifique que sea un correo electronico valido',
          mcontrasenan: 'Debe contener al menos un numero',
          mcontrasenam: 'Debe contener al menos una mayuscula',
          mvcontrasena: 'Las contraseñas no coinciden',
          mmindieciseis: 'Mínimo 16 dígitos',
          mmaxdieciseis: 'Máximo 16 dígitos',
          mmintres: 'Mínimo 3 dígitos',
          mmaxtres: 'Máximo 3 dígitos'
        }
        return Mensajes 
      }
      
}