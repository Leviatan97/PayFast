import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataScannerService {

  guardados: Registro[] = [];

  constructor() { }

  guardarRegistro( format: string, text: string){

    const nuevoRegistro = new Registro( format, text )
    this.guardados.unshift( nuevoRegistro )
    console.log(this.guardados)

  }
}
