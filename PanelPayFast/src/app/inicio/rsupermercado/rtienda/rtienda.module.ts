import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtiendaPageRoutingModule } from './rtienda-routing.module';

import { RtiendaPage } from './rtienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtiendaPageRoutingModule
  ],
  declarations: [RtiendaPage]
})
export class RtiendaPageModule {}
