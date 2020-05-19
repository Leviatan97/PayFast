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
      img: '../../../assets/img-slider/ubicacion.svg',
      titulo: 'Debemos obtener tu ubicación para verificar que te encuentras en alguno de nuestros supermercados aliados',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/cbarras.svg',
      titulo:'Escanea tus productos pasando la cámara de tu celular sobre los códigos de barras para añadirlos a tu carrito',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/qr.svg',
      titulo:'Cuando finalices tu compra veras un codigo el cual debes pasar por una de nuestras maquinas para generar tu comprobante de salida',
      txtbtn: 'none'
    },
    {
      img: '../../assets/img-slider/bolsa.svg',
      titulo:'Te recomendamos llevar tu propia bolsa para aportar al cuidado del medio ambiente (en caso de no contar con una en caja podrás adquirirla)',
      txtbtn: 'hidden'
    }
  ];

  constructor(private router: Router, private activarR: ActivatedRoute) { }

  ngOnInit() {
  }
  private Inicio(){
    this.router.navigate(['/inicio/i1']);
  }

}
