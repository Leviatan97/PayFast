import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { SupermercadoService } from '../../Servicios/supermercado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-i1',
  templateUrl: './i1.page.html',
  styleUrls: ['./i1.page.scss'],
})
export class I1Page implements OnInit {

  private supermercado: any;
  componentes: Componente[] = [];
  private ofertas: number = 0;
  buscador: string = '';
  private coords: string
  private isup: number


  constructor(
    private menu: MenuController,
    private superService: SupermercadoService,
    private activarR: ActivatedRoute,
    private usuario: UsuarioService,
    private router: Router,
    private geolocation: Geolocation,
    public toastController: ToastController
  ) {
    this.menu.enable(true);
    this.verSupermercado();

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit(){
    this.geoloc()
  }

  private promesaTiendageo(coor: any) {
    return new Promise((resolve, reject)=> {
      this.superService.verificarCoorTienda(coor).subscribe((result: any)=>{
        resolve({
          result,
          resultado: 'OK'
        })
      }, (error: object)=> {
        reject({
          error,
          resultado: 'Error'
        })
      })
    })
  }

  private promesaSupermercado(){
    return new Promise((resolve,reject)=>{
      this.superService.verSuperMercado().subscribe((result: any) => {
        resolve({
          result, resultado: 'ok'
        })
      },(error: object) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }

  private async verSupermercado(){
    try {
      this.supermercado = await this.promesaSupermercado()
      this.supermercado = this.supermercado.result
      this.supermercado = this.supermercado.res
      return this.supermercado
    } catch (error) {
      console.log(error)
    }
  }

  private ofertaTrue(){
      this.ofertas = 1
      console.log(this.ofertas)
      this.router.navigate(['inicio/i1/home-ofertas'])
  }

  private async scanerTrue(id: number){
    
    let datos = {
      smo_i: id
    }
    let result: any = null
    let coordenadasbd: any = null
    let coordenadasbd2 = this.coords.split(",")
    let resultado: any = null
    let respuesta: boolean = false
    let tienda: any

    try {
      result = await this.promesaTiendageo(datos)
      result =  result.result
      result =  result.result
      result.forEach(element => {
        coordenadasbd = element.ta_co.split(",")
        resultado = this.calculateDistance(Number(coordenadasbd2[1]), Number(coordenadasbd[1]),Number(coordenadasbd2[0]),Number(coordenadasbd[0]))
          if(element.ta_ro >= resultado && respuesta == false) {
            respuesta = true
            tienda = {
              ta_i: element.ta_i
            }
          }
      });
      console.log(respuesta)
      // if(respuesta) {
      //   // this.superService.guardarCoordenada(this.coords)
      //   // this.superService.guardarSuper(datos)
      //   // this.superService.guardarTienda(tienda)
      //   // this.router.navigate(['/inicio/i1/scanner/home-carrito'])
      // } else {
      //   if(this.coords != undefined) {
      //     // this.superService.guardarCoordenada(null)
      //     // this.superService.guardarSuper(null)
      //     // this.superService.guardarTienda(null)
      //     // this.validarCoords()
      //   }
      //   this.validarCoords()
      // }
    } catch (error) {
      console.log(error)
    }    
  }

  private calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis)*1000;
}
  
  private buscar(event){
    this.buscador = event.detail.value;
  }

  private geoloc(){

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      const coordenadas = `${ data.coords.latitude },${ data.coords.longitude }`
      this.coords = coordenadas
      console.log(this.coords)
    });
  }

  async validarCoords() {
    const toast = await this.toastController.create({
      message: 'Asegurese de estar dentro de un supermercado.',
      duration: 2000
    });
    toast.present();
  }
 
}
