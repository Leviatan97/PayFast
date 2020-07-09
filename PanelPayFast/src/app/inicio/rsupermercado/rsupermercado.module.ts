import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsupermercadoPageRoutingModule } from './rsupermercado-routing.module';

import { RsupermercadoPage } from './rsupermercado.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsupermercadoPageRoutingModule,
    ComponentesModule
  
  ],
  declarations: [RsupermercadoPage]
})
export class RsupermercadoPageModule {}
