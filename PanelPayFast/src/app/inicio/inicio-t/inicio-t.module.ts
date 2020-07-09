import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioTPageRoutingModule } from './inicio-t-routing.module';

import { InicioTPage } from './inicio-t.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioTPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InicioTPage]
})
export class InicioTPageModule {}
