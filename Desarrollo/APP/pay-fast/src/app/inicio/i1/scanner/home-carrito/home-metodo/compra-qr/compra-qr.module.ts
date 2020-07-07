import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraQrPageRoutingModule } from './compra-qr-routing.module';

import { CompraQrPage } from './compra-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraQrPageRoutingModule,
  ],
  declarations: [CompraQrPage]
})
export class CompraQrPageModule {}
