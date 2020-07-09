import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R1PageRoutingModule } from './r1-routing.module';

import { R1Page } from './r1.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    R1PageRoutingModule,
    ComponentesModule
  ],
  declarations: [R1Page]
})
export class R1PageModule {}
