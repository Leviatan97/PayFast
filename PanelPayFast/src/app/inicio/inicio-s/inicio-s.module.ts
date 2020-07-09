import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSPageRoutingModule } from './inicio-s-routing.module';

import { InicioSPage } from './inicio-s.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InicioSPage]
})
export class InicioSPageModule {}
