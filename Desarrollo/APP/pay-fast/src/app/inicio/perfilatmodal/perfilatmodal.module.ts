import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilatmodalPageRoutingModule } from './perfilatmodal-routing.module';

import { PerfilatmodalPage } from './perfilatmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilatmodalPageRoutingModule
  ],
  declarations: [PerfilatmodalPage]
})
export class PerfilatmodalPageModule {}
