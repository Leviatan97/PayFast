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
  private validar: string = "4.6825472,-74.170368"


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
    
    if(this.coords == this.validar)
    {
      console.log("");
    }
    else
    {
      if(this.coords != undefined)
      {
        this.presentToast()
      }  
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asegurese de estar dentro de un supermercado.',
      duration: 2000
    });
    toast.present();
  }

}
