import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-r-supermercados',
  templateUrl: './r-supermercados.component.html',
  styleUrls: ['./r-supermercados.component.scss']
})
export class RSupermercadosComponent implements OnInit {

  hide = true;

  public nombre: string;
  public supermercado:string;
  public correo:string;
  public contrasena:string;
  
  constructor() { }

  ngOnInit(): void {
  }

   rSupemercado(){
    const dsupermercado: object = {
      nombre: this.nombre,
      supermercado: this.supermercado,
      correo: this.correo,
      contrasena: this.contrasena

    }
    console.log(dsupermercado)
  }

}
