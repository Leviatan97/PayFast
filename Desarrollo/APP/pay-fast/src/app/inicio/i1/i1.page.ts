import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { SupermercadoService } from '../../Servicios/supermercado.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-i1',
  templateUrl: './i1.page.html',
  styleUrls: ['./i1.page.scss'],
})
export class I1Page implements OnInit {

  private supermercado: any;
  componentes: Componente[] = [];
  private argumento: any;

  constructor(
    private menu: MenuController,
    private superService: SupermercadoService,
    private activarR: ActivatedRoute,
    private usuario: UsuarioService
  ) {
    this.menu.enable(true);
    this.verSupermercado();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit() {
  }

  private promesaSupermercado(){
    return new Promise((resolve,reject)=>{
      this.superService.verSuperMercado().subscribe((result: any) => {
        resolve({
          result, resultado: 'ok'
        })
      },(error: object) => {
        reject({
          error, resultado: 'error'
        });
      });
    });
  }

  private async verSupermercado(){
    try {
      this.supermercado = await this.promesaSupermercado()
      this.supermercado = this.supermercado.result
      this.supermercado = this.supermercado.res
      return this.supermercado
    } catch (error) {
      console.log(error)
    }
  }

  private prueba(){
    console.log('OK')
  }
}
