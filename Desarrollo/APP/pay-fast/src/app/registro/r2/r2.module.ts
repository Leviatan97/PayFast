import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R2PageRoutingModule } from './r2-routing.module';

import { R2Page } from './r2.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    R2PageRoutingModule,
    ComponentesModule
  ],
  declarations: [R2Page]
})
export class R2PageModule {}
