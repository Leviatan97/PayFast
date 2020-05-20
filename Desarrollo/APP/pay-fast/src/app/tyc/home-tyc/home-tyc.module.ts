import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTycPageRoutingModule } from './home-tyc-routing.module';

import { HomeTycPage } from './home-tyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTycPageRoutingModule
  ],
  declarations: [HomeTycPage]
})
export class HomeTycPageModule {}
