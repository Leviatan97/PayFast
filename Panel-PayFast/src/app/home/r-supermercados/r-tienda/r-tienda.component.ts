import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-tienda',
  templateUrl: './r-tienda.component.html',
  styleUrls: ['./r-tienda.component.scss']
})
export class RTiendaComponent implements OnInit {

  
  public direccion: string;
  public email: string;
  public responsable: string;
  public ncontacto: number;
  public coordenada: string;
  public rango: number


  constructor() { }

  ngOnInit(): void {
  }

  rTienda(){
    const dtienda: object = {
      direccion: this.direccion,
      email: this.email,
      responsable: this.responsable,
      ncontacto: this.ncontacto,
      coordenada: this.coordenada,
      rango: this.rango,


    }
    console.log(dtienda)
  }
}
