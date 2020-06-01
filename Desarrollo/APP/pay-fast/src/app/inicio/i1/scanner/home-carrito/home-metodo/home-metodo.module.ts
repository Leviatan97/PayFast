import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMetodoPageRoutingModule } from './home-metodo-routing.module';

import { HomeMetodoPage } from './home-metodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMetodoPageRoutingModule
  ],
  declarations: [HomeMetodoPage]
})
export class HomeMetodoPageModule {}
