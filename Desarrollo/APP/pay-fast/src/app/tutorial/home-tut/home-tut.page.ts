import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-home-tut',
  templateUrl: './home-tut.page.html',
  styleUrls: ['./home-tut.page.scss'],
})
export class HomeTutPage implements OnInit {

  slides =[
    {
      img: '../../../assets/img-slider/ubicacion.svg',
      titulo:'Debemos obtener tu ubicación para verificar que te encuentras en alguno de nuestros supermercados aliados',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/cbarras.svg',
      titulo:'Escanea tus productos pasando los códigos de barras sobre el escáner para añadirlos a tu carrito',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/qr.svg',
      titulo:'Al finalizar debes pasar este codigo por una de nuestras maquinas para generar tu comprobante para la salida',
      txtbtn: 'none'
    },
    {
      img: '../../assets/img-slider/bolsa.svg',
      titulo:'Te recomendamos llevar tu propia bolsa para aportar al cuidado del medio ambiente (en caso de no contar con una en caja podrás adquirirla)',
      txtbtn: 'hidden'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
