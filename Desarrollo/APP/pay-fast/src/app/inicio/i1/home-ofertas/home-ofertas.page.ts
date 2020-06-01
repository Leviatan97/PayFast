import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ofertas',
  templateUrl: './home-ofertas.page.html',
  styleUrls: ['./home-ofertas.page.scss'],
})
  export class HomeOfertasPage implements OnInit {

    Mofertas =[
      
        
          {
          img: '../../../assets/img-ofertas/cervezas.svg',
          titulo:'20% de descuento en bebidas alcoholicas',
          clase: "o1",
          color: "oferta" 
        },
        
          {
          img: '../../../assets/img-ofertas/pan.svg',
          titulo:'20% de descuento en panaderia',
          clase: "o1",
          color: "ofertaa" 
        },
        {
          img: '../../../assets/img-ofertas/granel.svg',
          titulo:'15% de desuento en productos al granel',
          clase: "o1",
          color: "ofertaaa"
          
        },
      ]
  
    ofertas=[
     
        
      
        {
          img: '../../../assets/img-ofertas/papas.svg',
          titulo:'10% de descuento en snacks',
          clase: "o4",
          color: "ofertaaaa"
  
      },
      
        {
        img: '../../../assets/img-ofertas/papelh.svg',
        titulo:'10% de descuento en papel higienico',
        clase: "o5",
        color: "ofertaaaaa"
      },
      
    ]
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
