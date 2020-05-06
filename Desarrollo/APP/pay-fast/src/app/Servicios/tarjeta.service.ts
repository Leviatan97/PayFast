import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http:HttpClient) { }

  public registrarTarjeta(datos:any){
    return this.http.post('http://localhost:5000/tarjeta',datos);
  }
}
