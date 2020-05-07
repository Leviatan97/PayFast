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
      titulo:'hola 1',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/cbarras.svg',
      titulo:'hola 2',
      txtbtn: 'none'
    },
    {
      img: '../../../assets/img-slider/qr.svg',
      titulo:'hola 3',
      txtbtn: 'none'
    },
    {
      img: '../../assets/img-slider/bolsa.svg',
      titulo:'hola 4',
      txtbtn: 'hidden'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
