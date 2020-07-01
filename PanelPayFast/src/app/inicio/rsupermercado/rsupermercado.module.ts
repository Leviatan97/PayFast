import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsupermercadoPageRoutingModule } from './rsupermercado-routing.module';

import { RsupermercadoPage } from './rsupermercado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsupermercadoPageRoutingModule
  ],
  declarations: [RsupermercadoPage]
})
export class RsupermercadoPageModule {}
