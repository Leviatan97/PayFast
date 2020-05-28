import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCarritoPageRoutingModule } from './home-carrito-routing.module';

import { HomeCarritoPage } from './home-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCarritoPageRoutingModule
  ],
  declarations: [HomeCarritoPage]
})
export class HomeCarritoPageModule {}
