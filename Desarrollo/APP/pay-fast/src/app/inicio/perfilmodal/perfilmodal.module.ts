import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilmodalPageRoutingModule } from './perfilmodal-routing.module';

import { PerfilmodalPage } from './perfilmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PerfilmodalPageRoutingModule
  ],
  declarations: [PerfilmodalPage]
})
export class PerfilmodalPageModule {}
