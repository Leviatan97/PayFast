import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http:HttpClient) { }

  public registrarTarjeta(datos:any){
    return this.http.post(`${URL}/tarjeta`,datos);
  }
}
