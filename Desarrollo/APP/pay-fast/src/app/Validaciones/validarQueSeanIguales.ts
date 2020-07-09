import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export const validarQueSeanIguales: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const contrasena = control.get("contrasena")
    const contrasena2 = control.get("contrasena2")
  
    return contrasena.value === contrasena2.value
      ? null
      : { noSonIguales: true }
  }