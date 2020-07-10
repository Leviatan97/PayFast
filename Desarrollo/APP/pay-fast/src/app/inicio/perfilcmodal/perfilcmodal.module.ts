import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcmodalPageRoutingModule } from './perfilcmodal-routing.module';

import { PerfilcmodalPage } from './perfilcmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcmodalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilcmodalPage]
})
export class PerfilcmodalPageModule {}
