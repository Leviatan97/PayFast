import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-i1',
  templateUrl: './i1.page.html',
  styleUrls: ['./i1.page.scss'],
})
export class I1Page implements OnInit {

  componentes: Componente[] = [];

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit() {
  }

  private menuAbrir(){
    this.menu.toggle();
  }

  private prueba(){
    console.log('OK')
  }
}
