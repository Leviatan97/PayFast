import { Component, OnInit } from '@angular/core';

import { Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopInfoComponent } from './componentes/pop-info/pop-info.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio/inicio-s',
      icon: 'home'
    },
    {
      title: 'Registrar Supermercado',
      url: '/inicio/rsupermercado',
      icon: 'add-circle'
    },
    {
      title: 'Registrar Tienda',
      url: '/inicio/rsupermercado/rtienda',
      icon: 'chevron-forward-circle'
    },
    {
      title: 'Estadisticas',
      url: '/inicio/inicio-e',
      icon: 'bar-chart'
    },
    {
      title: 'PQRS',
      url: '/folder/Archived',
      icon: 'Mail'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];


  constructor() {

  }

  ngOnInit() {
  }
}
