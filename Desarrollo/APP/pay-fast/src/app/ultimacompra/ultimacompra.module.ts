import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimacompraPageRoutingModule } from './ultimacompra-routing.module';

import { UltimacompraPage } from './ultimacompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimacompraPageRoutingModule
  ],
  declarations: [UltimacompraPage]
})
export class UltimacompraPageModule {}
