import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataScannerService } from 'src/app/Servicios/data-scanner.service';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home-carrito',
  templateUrl: './home-carrito.page.html',
  styleUrls: ['./home-carrito.page.scss'],
})
export class HomeCarritoPage implements OnInit {

  private scanneo: string = "scanneo canselado"
  private formato: string 


  constructor
  (
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataScannerService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.scanner()
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
  }


  async usuarioContra() {
    const toast = await this.toastController.create({
      message: 'Asegurese de que sea un codigo de barras.',
      duration: 2000
    });
    toast.present();
  }

}
