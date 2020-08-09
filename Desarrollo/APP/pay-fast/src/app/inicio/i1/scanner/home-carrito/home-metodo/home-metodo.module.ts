import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMetodoPageRoutingModule } from './home-metodo-routing.module';

import { HomeMetodoPage } from './home-metodo.page';
import { PerfilatmodalPage } from '../../../../perfilatmodal/perfilatmodal.page';
import { PerfilatmodalPageModule } from '../../../../perfilatmodal/perfilatmodal.module';

@NgModule({
  entryComponents:[
    PerfilatmodalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMetodoPageRoutingModule,
    PerfilatmodalPageModule 
  ],
  declarations: [HomeMetodoPage]
})
export class HomeMetodoPageModule {}
