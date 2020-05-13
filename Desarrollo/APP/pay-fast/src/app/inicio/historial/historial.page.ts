import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor
  (
    private menu: MenuController,
    private router: Router
  ) 
  { }

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
    this.router.navigate(['inicio/historial/detalles'])
  }

}
