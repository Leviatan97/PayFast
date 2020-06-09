import { Component, OnInit } from '@angular/core';
import { isContext } from 'vm';

@Component({
  selector: 'app-home-metodo',
  templateUrl: './home-metodo.page.html',
  styleUrls: ['./home-metodo.page.scss'],
})
export class HomeMetodoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private metodoPago:any=[];

  private mPago(){
    this.metodoPago=[
      {
        nombre: 'Alejandro',
        apellido: 'Gomez',
        tipo:'tarjetac',
        ntarjeta: '4444555533332222',
        vencimiento: 11/27,
        cvv: '346',
        icon: ''
      },
      {
        nombre: 'Juan',
        apellido: 'Perez',
        tipo:'billeterav',
        ntarjeta: '',
        vencimiento:'',
        cvv: '',
        icon: '' 
      }
    ]
  }

}
