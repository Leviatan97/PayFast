import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataScannerService } from 'src/app/Servicios/data-scanner.service';
import { ToastController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SupermercadoService } from '../../../../Servicios/supermercado.service';

@Component({
  selector: 'app-home-carrito',
  templateUrl: './home-carrito.page.html',
  styleUrls: ['./home-carrito.page.scss'],
})
export class HomeCarritoPage implements OnInit {

  private scanneo: string = "scanneo cancelado"
  private formato: string 
  private coords: string
  private validar: string = "4.355657,-74045130"
  private productos:any=[];
  private tienda: any
  


  constructor
  (
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataScannerService,
    public toastController: ToastController,
    private geolocation: Geolocation,
    private superService: SupermercadoService
  ) { }

  ngOnInit() {
    this.scanner()
    this.geoloc() 
  }

  private promesaTienda() {
    return new Promise((resolve, reject)=> {
      this.superService.consultarRutaProducto().subscribe((result: any)=>{
        resolve({
          result,
          resultado: 'OK'
        })
      }, (error: object)=> {
        reject({
          error,
          resultado: 'Error'
        })
      }
      )
    })
  }

  private promesaRuta(url:string, codigo:string) {
    return new Promise((resolve, reject)=> {
      this.superService.consultarProducto(url,codigo).subscribe((result: any)=>{
        resolve({
          result,
          resultado: 'OK'
        })
      }, (error: object)=> {
        reject({
          error,
          resultado: 'Error'
        })
      }
      )
    })
  }

  private async Tienda() {
    let producto: any = null
    let resultado: any = null
    try {
      this.tienda = await this.promesaTienda()
      this.tienda = this.tienda.result
      this.tienda = this.tienda.result
      producto = await this.promesaRuta(this.tienda[0].ra_rt, this.scanneo)
      producto = producto.result
      if(producto.length >= 1) {
        resultado = await this.Compra(producto)
        console.log(resultado)
      }else {
        this.productoToast()
      }

      console.log(producto)
    } catch (error) {
      console.log(error)
    }
  }

  scanner(){
   
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanneo = barcodeData.text
      this.formato = barcodeData.format

      if( !barcodeData.cancelled)
      {
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text)
        this.Tienda()
      }

     }).catch(err => {
         console.log('Error', err);
         this.dataLocal.guardarRegistro( 'Qrcode', 'https://www.facebook.com/')
     });
     this.geoloc()
  }

  private geoloc(){

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      const coordenadas = `${ data.coords.latitude },${ data.coords.longitude }`
      this.coords = coordenadas
    });
    
    // if(this.coords == this.validar)
    // {
    //   console.log("");
    // }
    // else
    // {
    //   if(this.coords != undefined)
    //   {
    //     this.presentToast()
    //   }  
    // }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asegurese de estar dentro de un supermercado.',
      duration: 2000
    });
    toast.present();
  }



  private Compra(datos: any){
    return new Promise((resolve,reject)=> {
      const prod = this.productos
      let producto = {
        n_producto: datos[0].producto_id,
        nombre: datos[0].Producto_nombre,
        cantidad: 1,
        precio: datos[0].producto_valor
      }
      let arraylenght = this.productos.length;
      if(arraylenght == 0) {
        this.productos.push(producto)
      }else {
        this.productos.forEach(element => {
          if(element.nombre == producto.nombre) {
            console.log("entro al if")
            element.cantidad += 1
          }else {
            console.log("entro al else")
            this.productos.push(producto)
          }
        });
      }

      if (arraylenght == this.productos.length) {
        reject(false);
      }else{
        resolve(this.productos);
      }

    })
  }


  private Eliminar(codigo:number) {
    const prod = this.productos
    this.productos.forEach(function(element){
      if(codigo == element.n_producto){
          let pos = prod.indexOf(element);
          const productod = prod.splice(pos, 1);
          console.log(productod);
      }
      // console.log(element)
    });
  }

  private valorProduct() {
    let numero: number = 0
    this.productos.forEach(function(element){
      numero = (element.cantidad * element.precio) + numero
    });
    return numero
  }

  private valorTotal() {
    let numero: number = 0
    let porcentaje: number = 0.022
    this.productos.forEach(function(element){
      numero = (element.cantidad * element.precio) + numero
    });

    return (numero*porcentaje)+numero
  }

  private mProducto(ev:any){
    for(let i = 0; i < this.productos.lenght; i++){
      if(this.scanneo == this.productos.n_producto){
        this.productos.cantidad ++
      }
      if(ev <= 0) {
        console.log("La cantidad del producto no puede ser inferior a uno")
      }
    }
  }

  async productoToast() {
    const toast = await this.toastController.create({
      message: 'El producto no existe en la tienda.',
      duration: 2000
    });
    toast.present();
  }

  private subTotal(){

  }
  
  private Total(){
    
  }
}
