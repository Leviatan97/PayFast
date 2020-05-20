import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  Mofertas =[
    
      
        {
        img: '../../../assets/img-ofertas/cervezas.svg',
        titulo:'20% de descuento en bebidas alcoholicas',
        clase: "o1" 
      },
      
        {
        img: '../../../assets/img-ofertas/pan.svg',
        titulo:'20% de descuento en panaderia',
        clase: "o2" 
      },
      {
        img: '../../../assets/img-ofertas/granel.svg',
        titulo:'15% de desuento en productos al granel',
        clase: "o3"
        
      },
    ]

  ofertas=[
   
      
    
      {
        img: '../../../assets/img-ofertas/papas.svg',
        titulo:'10% de descuento en snacks',
        clase: "o4"

    },
    
      {
      img: '../../../assets/img-ofertas/papelh.svg',
      titulo:'10% de descuento en papel higienico',
      clase: "o5"
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
