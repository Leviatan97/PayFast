import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilatmodalPageRoutingModule } from './perfilatmodal-routing.module';

import { PerfilatmodalPage } from './perfilatmodal.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PerfilatmodalPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PerfilatmodalPage]
})
export class PerfilatmodalPageModule {}
