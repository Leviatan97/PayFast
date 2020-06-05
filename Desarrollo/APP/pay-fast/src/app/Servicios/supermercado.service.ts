import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  constructor(private http : HttpClient) { }

  public verSuperMercado(){
    return this.http.get(`${URL}/supermercado`)
  }
}
