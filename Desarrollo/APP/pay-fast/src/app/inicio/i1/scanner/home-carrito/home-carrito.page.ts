import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home-carrito',
  templateUrl: './home-carrito.page.html',
  styleUrls: ['./home-carrito.page.scss'],
})
export class HomeCarritoPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  scanner(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
