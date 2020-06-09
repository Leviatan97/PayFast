import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataScannerService } from 'src/app/Servicios/data-scanner.service';
import { ToastController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  


  constructor
  (
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataScannerService,
    public toastController: ToastController,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.scanner()
    this.geoloc()
    this.Compra()
    
  }

  scanner(){
   
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanneo = barcodeData.text
      this.formato = barcodeData.format

      if( !barcodeData.cancelled)
      {
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text)
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

  private productos:any=[];

  private Compra(){
    this.productos=[
      {
        n_producto:112,
        nombre:'Papas Golpe',
        cantidad: 2,
        precio: 4500
      },
      {
        n_producto:113,
        nombre:'Papas Pepito',
        cantidad: 1,
        precio: 4500
      }
    ]
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

  private subTotal(){

  }
  
  private Total(){
    
  }
}
