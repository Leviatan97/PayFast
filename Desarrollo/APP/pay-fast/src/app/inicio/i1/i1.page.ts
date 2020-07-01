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
  private validar: string = "4.355657,-74045130"


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

  private scanerTrue(){
    
      console.log('OK')
      console.log(this.ofertas)
      // if(this.coords == this.validar)
      // {
      //   this.router.navigate(['inicio/i1/scanner/home-carrito'])
      // }
      // else
      // {
      //   if(this.coords != undefined)
      //   {
      //     this.validarCoords()
      //   }  
      // }    
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
