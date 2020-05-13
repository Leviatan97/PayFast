import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { InicioPageModule } from '../inicio.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    ComponentesModule
  ],
  declarations: [HistorialPage]
})
export class HistorialPageModule {}
