import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";


@Component({
  selector: 'app-compra-qr',
  templateUrl: './compra-qr.page.html',
  styleUrls: ['./compra-qr.page.scss'],
})
export class CompraQrPage implements OnInit {

  private encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  compra=[{
    id_venta: 1
  }]

  constructor(private barcodeScanner: BarcodeScanner) { 
    this.encodeData = this.compra[0].id_venta;
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }

  ngOnInit() {
    this.encodedText()
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
  
}
