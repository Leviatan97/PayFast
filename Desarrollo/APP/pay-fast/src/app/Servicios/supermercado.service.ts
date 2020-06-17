import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  private coordenadas: any

  constructor(private http : HttpClient, private navCtrl: NavController, ) { }

  public verSuperMercado(){
    return this.http.get(`${URL}/supermercado`)
  }

  /**
   * consultarProducto
   */
  public consultarProducto(url:string, codigo:number) {
      return this.http.get(`${url}/${codigo}`)
  }

  /**
   * consultarRutaProducto
   */
  public consultarRutaProducto(datos: any) {
      return this.http.post(`${URL}/consulPro`,datos)
  }
  public guardarCoordenada(coordenada:any) {
    this.coordenadas = coordenada
  }
  private cargarCoordenada() {
    return this.coordenadas
  }

  /**
   * verificarCoor
   */
  public async verificarCoor(): Promise<boolean> {
      
      const datos: any =  await this.cargarCoordenada()
      if(!this.coordenadas) {
        this.navCtrl.navigateRoot('/inicio/i1')
        return Promise.resolve(false)
      }
      return new Promise((resolve, reject)=>{
          this.http.post(`${URL}/coor`,datos).subscribe(resp=>{
            if(resp['respuesta'] == true){
              resolve(true)
            } else {
              this.navCtrl.navigateRoot('/inicio/i1')
              resolve(false)
            }
          })
      })
  }

  public verificarCoorTienda(datos: any) {
    return this.http.post(`${URL}/coor`,datos)
  }
}
