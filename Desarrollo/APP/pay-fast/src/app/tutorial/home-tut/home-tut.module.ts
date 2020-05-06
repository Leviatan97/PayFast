import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTutPageRoutingModule } from './home-tut-routing.module';

import { HomeTutPage } from './home-tut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTutPageRoutingModule
  ],
  declarations: [HomeTutPage]
})
export class HomeTutPageModule {}
