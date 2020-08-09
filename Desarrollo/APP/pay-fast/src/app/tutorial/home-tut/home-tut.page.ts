import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { timeStamp } from 'console';

@Component({
  selector: 'app-home-tut',
  templateUrl: './home-tut.page.html',
  styleUrls: ['./home-tut.page.scss'],
})
export class HomeTutPage implements OnInit {

  private argumento = null;
  slides =[
    {
      img: '../../../assets/img-slider/light/ubicacion_tienda.svg',
      img2: '../../../assets/img-slider/dark/ubicacion_tienda.svg',
      titulo: 'Debemos obtener tu ubicación para verificar que te encuentras en alguno de nuestros supermercados aliados',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/light/codigo_de_barras.svg',
      img2: '../../../assets/img-slider/dark/codigo_de_barras.svg',
      titulo:'Escanea tus productos pasando la cámara de tu celular sobre los códigos de barras para añadirlos a tu carrito',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/light/qr.svg',
      img2: '../../../assets/img-slider/dark/qr.svg',
      titulo:'Cuando finalices tu compra veras un código el cual debes pasar por una de nuestras máquinas para generar tu comprobante de salida',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/light/bolsa.svg',
      img2: '../../../assets/img-slider/dark/bolsa.svg',
      titulo:'Te recomendamos llevar tu propia bolsa para aportar al cuidado del medio ambiente (en caso de no contar con una en caja podrás adquirirla)',
      txtbtn: 'hidden'
    }
  ];

  constructor(private router: Router, private activarR: ActivatedRoute) { 
  }

  ngOnInit() {
  }
  private Inicio(){
    this.router.navigate(['/inicio/i1']);
  }

}
