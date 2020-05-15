import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcmodalPageRoutingModule } from './perfilcmodal-routing.module';

import { PerfilcmodalPage } from './perfilcmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcmodalPageRoutingModule
  ],
  declarations: [PerfilcmodalPage]
})
export class PerfilcmodalPageModule {}
