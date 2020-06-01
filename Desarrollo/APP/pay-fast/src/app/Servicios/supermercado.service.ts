import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  constructor(private http : HttpClient) { }

  public verSuperMercado(){
    return this.http.get('http://192.168.0.9:5000/supermercado')
  }
}
