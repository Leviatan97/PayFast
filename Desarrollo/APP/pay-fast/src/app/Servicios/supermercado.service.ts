import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { element } from 'protractor';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  private coordenadas: any
  private tienda: any
  private super: any

  constructor(private http : HttpClient, private navCtrl: NavController, private storage: Storage) { }

  public verSuperMercado(){
    return this.http.get(`${URL}/supermercado`)
  }

  /**
   * consultarProducto
   */
  public consultarProducto(url:string, codigo:string) {
      return this.http.get(`${url}/${codigo}`)
  }

  /**
   * consultarRutaProducto
   */
  public consultarRutaProducto() {
    const datos: any = this.cargarTienda()
    return this.http.post(`${URL}/consulPro`,datos)
  }

  public guardarCoordenada(coordenada:any) {
    this.coordenadas = coordenada
  }

  private cargarCoordenada() {
    return this.coordenadas
  }

  public guardarTienda(tienda: any) {
    this.tienda = tienda
  }

  private cargarTienda() {
    return this.tienda
  }

  public guardarSuper(supermercado: any) {
    this.super = supermercado
  }

  private cargarSuper() {
    return this.super
  }

  /**
   * verificarCoor
   */
  public async verificarCoor(): Promise<boolean> {

      

      if(!this.coordenadas) {
        this.navCtrl.navigateRoot('/inicio/i1')
        return Promise.resolve(false)
      }

      if(!this.super) {
        this.navCtrl.navigateRoot('/inicio/i1')
        return Promise.resolve(false)
      }

      let resultado: any = null
      let coord: any = null
      let coord2: any = await this.cargarCoordenada()
      coord2 = coord2.split(",")
      const datos: any =  await this.cargarSuper()
      let distancia: number
      let respuesta: boolean = false

      return new Promise((resolve, reject)=>{
          this.http.post(`${URL}/coor`,datos).subscribe( resp => {
            resp['result'].forEach(element => {
                coord = element.ta_co.split(",")
                distancia = this.calcularDist(Number(coord2[1]),Number(coord[1]),Number(coord2[0]),Number(coord[0]))
                if(element.ta_ro >= distancia && respuesta == false) {
                  respuesta = true
                }
            });
            if(respuesta){
              resolve(respuesta)
            }else {
              resolve(respuesta)
              this.navCtrl.navigateRoot('/inicio/i1')
            }
            
          })
      })
  }

  private calcularDist(lon, lonT, lat, latT){
      let p = 0.017453292519943295;
      let c = Math.cos;
      let a = 0.5 - c((lat-latT) * p) / 2 + c(latT * p) *c((lat) * p) * (1 - c(((lon- lonT) * p))) / 2;
      let dis = (12742 * Math.asin(Math.sqrt(a)));
      return Math.trunc(dis)*1000;
  }

  public verificarCoorTienda(datos: any) {
    return this.http.post(`${URL}/coor`,datos)
  }
}
