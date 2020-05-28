import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeOfertasPageRoutingModule } from './home-ofertas-routing.module';

import { HomeOfertasPage } from './home-ofertas.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeOfertasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [HomeOfertasPage]
})
export class HomeOfertasPageModule {}
