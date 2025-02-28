import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtiendaPageRoutingModule } from './rtienda-routing.module';

import { RtiendaPage } from './rtienda.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RtiendaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RtiendaPage]
})
export class RtiendaPageModule {}
