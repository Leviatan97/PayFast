import { Component, OnInit } from '@angular/core';
import { isContext } from 'vm';

@Component({
  selector: 'app-home-metodo',
  templateUrl: './home-metodo.page.html',
  styleUrls: ['./home-metodo.page.scss'],
})
export class HomeMetodoPage implements OnInit {
  private metodoPago:any=[];

  constructor() { }

  ngOnInit() {
    this.mPago()
  }

  

  private mPago(){
    this.metodoPago=[
      {
        nombre: 'Alejandro',
        apellido: 'Gomez',
        tipo:'Mastercad',
        vencimiento: 11/27,
        cvv: '346',
        icon: 'card-outline'
      },
      {
        nombre: 'Juan',
        apellido: 'Perez',
        tipo:'Nequi',
        icon: 'wallet-outline'
      }
    ]
  }

}
